import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";

export default function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a href="mailto:szalbierz.d.k@gmail.com" target="_blank" rel="noreferrer">
            <span className="sr-only">Mail</span>
            <Mail className="h-6 w-6" />
          </a>
          <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
            <span className="sr-only">Twitter</span>
            <Icons.twitter className="h-6 w-6" />
          </a>
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <span className="sr-only">Guthub</span>
            <Icons.gitHub className="h-6 w-6" />
          </a>
        </div>
        <div className="md-2 flex space-x-2 text-sm text-muted-foreground">
          <a href={siteConfig.links.site} target="_blank">{siteConfig.blogName}</a>
        </div>
      </div>
    </footer>
  )
}
