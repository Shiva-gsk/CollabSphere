import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

interface AvatarLogoProps {
    imageUrl: string
}
  
  export function AvatarLogo({imageUrl}:AvatarLogoProps) {
    console.log(imageUrl);
    return (
      <Avatar className="w-[100px] h-[100px]">
        <AvatarImage src={"https://github.com/shadcn.png"} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  