import { LucideIcon, MoveUpRight } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import { cn } from '@/lib/utils';

const FeatureCard: FC<{
  icon: LucideIcon;
  text: string;
  href: Route;
  className?: string;
}> = ({ icon: Icon, text, href, className }) => {
  return (
    <Link
      href={href}
      className={cn('group rounded-lg border bg-card p-6', className)}
    >
      <div className="relative flex h-full w-full">
        <Icon
          size={48}
          className="absolute right-0 top-0 h-10 w-10 text-foreground/30 transition-all group-hover:h-12 group-hover:w-12 group-hover:text-primary/50"
        />
        <h3 className="absolute self-end text-2xl font-semibold leading-none tracking-tight transition-all group-hover:text-primary">
          {text} <MoveUpRight className="inline-block h-5 w-5" />
        </h3>
      </div>
    </Link>
  );
};

export default FeatureCard;
