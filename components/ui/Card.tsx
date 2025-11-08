import { forwardRef, type HTMLAttributes } from "react";
import { clsx } from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, hover = false, children, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      "rounded-xl border border-gray-100 bg-white p-6 shadow-lg",
      hover ? "transition-all hover:border-blue-300 hover:shadow-xl" : "",
      className
    )}
    {...props}
  >
    {children}
  </div>
));

Card.displayName = "Card";

export default Card;
export type { CardProps };

