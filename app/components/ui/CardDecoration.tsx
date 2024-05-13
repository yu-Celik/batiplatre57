import { cn } from "@/utils/cn";
import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";

interface CardDecorationProps extends BoxProps {
    children: ReactNode | ReactNode[];
}

export function LeftCardDecoration({ children, height, width, ...props }: CardDecorationProps) {
    return (
        <Box position="relative" {...props}>
            <span
                className="bg-amber-500 dark:bg-amber-600 absolute -inset-x-3 -inset-y"
                style={{ height: `${height}`, width: `${width}`, borderRadius: '10px 0 10px 0px', zIndex: -10 }}></span>
            {children}
        </Box>
    )
}
export function RightCardDecoration({ children, className, ...props }: CardDecorationProps) {
    return (
        <Box position="relative" {...props}>
            <span className={cn('absolute -inset-x-3 -inset-y rounded-tr rounded-bl', className)} />
            {children}
        </Box>
    )
}