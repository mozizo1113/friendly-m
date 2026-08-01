import { cn } from '@/lib/utils';

interface AdSlotProps {
  /** Unique slot id, e.g. "home-top" */
  id: string;
  label?: string;
  /** 'banner' = wide leaderboard, 'inline' = in-content, 'square' = sidebar box */
  format?: 'banner' | 'inline' | 'square';
  className?: string;
}

const sizes: Record<string, string> = {
  banner: 'min-h-[90px] md:min-h-[110px]',
  inline: 'min-h-[120px]',
  square: 'min-h-[250px] max-w-[300px] mx-auto',
};

/**
 * Reserved advertising space. Drop your ad network script/iframe inside the
 * inner div (data-ad-slot) — the wrapper keeps layout stable to avoid CLS.
 */
export const AdSlot = ({ id, label = 'مساحة إعلانية', format = 'banner', className }: AdSlotProps) => {
  return (
    <div className={cn('container mx-auto px-4 my-6', className)} dir="rtl">
      <div
        id={`ad-${id}`}
        data-ad-slot={id}
        aria-label={label}
        className={cn(
          'flex items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-xs text-muted-foreground',
          sizes[format],
        )}
      >
        {label}
      </div>
    </div>
  );
};
