import { Badge } from "./badge";
import { Card, CardContent } from "./card";

export interface BlogPostCardProps {
  title: string;
  description: string;
  tags: string[];
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  description,
  tags,
}) => {
  return (
    <Card className="flex w-full flex-col gap-3 overflow-hidden rounded-3xl border p-3 shadow-lg h-full">
      <CardContent className="flex-grow p-3">
        <h2 className="mb-2 text-2xl font-bold leading-tight text-card-foreground">
          {title}
        </h2>

        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
