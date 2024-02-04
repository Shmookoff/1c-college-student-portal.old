import { format } from 'date-fns';
import { FC } from 'react';

const Announcement: FC<{
  id: number;
  title: string;
  content: string;
  created: Date;
}> = ({ title, created, content }) => {
  return (
    <div>
      <div>
        <h4 className="inline text-xl font-medium tracking-tight">{title}</h4>{' '}
        <span className="text-sm text-muted-foreground">
          {format(created, 'dd MMM yyyy')}
        </span>
      </div>
      <p className="leading-7 text-muted-foreground">{content}</p>
    </div>
  );
};

export default Announcement;
