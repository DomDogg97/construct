
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  date: string;
  description: string;
  image: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties; // Add style prop
}

export default function ProjectCard({ project, className, style }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={`/projects/${project.id}`}
      className={cn(
        "group relative overflow-hidden rounded-lg cursor-pointer hover-card block",
        className
      )}
      style={style} // Apply the style prop
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="h-80 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
      </div>
      
      {/* Info Overlay - Always visible on mobile, visible on hover for desktop */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end transition-all duration-300",
          isHovered ? "opacity-100" : "sm:opacity-80"
        )}
      >
        <div className="transform transition-transform duration-500" style={{ 
          transform: isHovered ? 'translateY(0)' : 'translateY(20px)'
        }}>
          {/* Category */}
          <span className="bg-construction-primary text-white px-3 py-1 text-sm rounded-full mb-3 inline-block">
            {project.category}
          </span>
          
          {/* Title */}
          <h3 className="text-white text-xl font-semibold mb-3">{project.title}</h3>
          
          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-construction-primary" />
              {project.location}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1 text-construction-primary" />
              {project.date}
            </div>
          </div>
          
          {/* Description - Only visible on hover for desktop */}
          <p 
            className={cn(
              "text-gray-300 text-sm transition-all duration-500",
              isHovered ? "max-h-20 opacity-100" : "max-h-0 sm:opacity-0 overflow-hidden"
            )}
          >
            {project.description}
          </p>
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 bg-construction-secondary text-white px-3 py-1 text-xs font-medium rounded">
          Featured
        </div>
      )}
    </Link>
  );
}
