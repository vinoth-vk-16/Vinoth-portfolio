import React, { useState } from "react";
import { Linkedin, Phone, Github, Mail } from "lucide-react";

import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  github?: string;
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "+916380091722",
  email = "imvinothvk521@gmail.com",
  linkedin = "https://linkedin.com/in/vinoth-kumar-793043250",
  github = "https://github.com/vinoth-vk-16",
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '730ba4e7-6427-468f-965d-1dde55ddd8cb',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact from ${formData.firstName}`,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section className="py-16 md:py-32">
      <div className="container px-4">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-32 lg:pl-32">
          <div className="flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-4xl md:text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-xl md:text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <div className="flex flex-col gap-4">
                <a 
                  href={`tel:${phone}`} 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>{phone}</span>
                </a>
                <a 
                  href={`mailto:${email}`} 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>{email}</span>
                </a>
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex max-w-screen-md flex-col gap-6 p-4">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  type="text" 
                  id="firstName" 
                  placeholder="First Name" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  type="text" 
                  id="lastName" 
                  placeholder="Last Name" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                type="text" 
                id="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                placeholder="Type your message here." 
                id="message" 
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            {submitStatus === 'success' && (
              <p className="text-green-600 text-sm">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>
            )}
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
