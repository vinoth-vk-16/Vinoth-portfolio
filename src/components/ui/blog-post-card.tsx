import { Badge } from "./badge";
import { Card, CardContent } from "./card";
import { Github } from "lucide-react";

export interface BlogPostCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  description,
  tags,
  image,
  github,
}) => {
  return (
    <Card className="flex w-full flex-col gap-3 overflow-hidden rounded-3xl border p-3 shadow-lg h-full">
      {image && (
        <div className="w-full h-12 flex items-center justify-center p-2">
          <img src={image} alt="" className="h-full w-auto object-contain opacity-20" />
        </div>
      )}
      <CardContent className="flex-grow p-3 flex flex-col">
        <h2 className="mb-2 text-2xl font-bold leading-tight text-card-foreground">
          {title}
        </h2>

        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
              {tag}
            </Badge>
          ))}
        </div>

        {github && (
          <div className="flex justify-end">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
