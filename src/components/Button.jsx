import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    isLoading = false,
    icon = null,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-none font-sans font-semibold tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden";

    const variants = {
        primary: "bg-gold-gradient text-black hover:shadow-glow hover:-translate-y-0.5 min-w-[160px]",
        secondary: "glass-button text-primary hover:text-white hover:border-primary/50",
        ghost: "bg-transparent text-secondary hover:text-primary hover:bg-white/5",
        outline: "border border-primary text-primary hover:bg-primary hover:text-black transition-colors"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            disabled={isLoading}
            {...props}
        >
            {/* Shine effect for primary buttons */}
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />
            )}

            {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : icon ? (
                <span className="mr-2 group-hover:translate-x-1 transition-transform">{icon}</span>
            ) : null}

            <span className="relative z-10">{children}</span>
        </button>
    );
};

export default Button;
