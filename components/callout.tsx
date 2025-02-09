import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CalloutProps {
  children?: ReactNode,
  type?: 'default' | 'warning' | 'danger' | 'success'
}

export default function Callout({ children, type = 'default', ...props }: CalloutProps) {
  return (
    <div className={cn("my-6 items-center rounded-md border border-l-4 p-4 w-full dark:max-w-none",
      { "border-red-900 bg-red-50 dark:prose": type === "danger" },
      { "border-yellow-900 bg-yellow-50 dark:prose": type === "warning" },
      { "border-green-900 bg-green-50 dark:prose": type === "success" }
    )}
      {...props}
    >
      {children}
    </div>
  )
}
