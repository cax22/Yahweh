"use client";

import { Scissors, PenTool, BeakerIcon as Beard, Baby } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ServiceProps {
  service: {
    name: string;
    price: string;
    icon: string;
    description?: string;
  };
}

export function ServiceCard({ service }: ServiceProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    switch (service.icon) {
      case "scissors":
        return <Scissors className="h-5 w-5" />;
      case "design":
        return <PenTool className="h-5 w-5" />;
      case "beard":
        return <Beard className="h-5 w-5" />;
      case "child":
        return <Baby className="h-5 w-5" />;
      default:
        return <Scissors className="h-5 w-5" />;
    }
  };

  return (
    <Card
      className={cn(
        "transition-all duration-300",
        isHovered ? "translate-y-[-5px] shadow-lg" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getIcon()}
            <CardTitle className="text-lg">{service.name}</CardTitle>
          </div>
          <span className="font-bold">{service.price}</span>
        </div>
      </CardHeader>
      {service.description && (
        <CardContent>
          <CardDescription>{service.description}</CardDescription>
        </CardContent>
      )}
    </Card>
  );
}
