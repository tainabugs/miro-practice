"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { Hint } from "@/components/hint";
import { cn } from "@/lib/utils";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  
  // Retrieves the current organization details
  const { organization } = useOrganization();
  
  // Retrieves ´setActive´ from the ´useOrganizationList´ hook which allows setting the active organization.
  const { setActive } = useOrganizationList();

  // Determines if the current item is the active one
  const isActive = organization?.id == id;

  // Sets the active organization to the current item's id, provided setActive is not null.
  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
        <Hint
        label={name}
        side="right"
        align="start"
        sideOffset={18}
        >
      <Image
        width={100}
        height={100}
        alt={name}
        src={imageUrl}
        onClick={onClick}
        className={cn(
          "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
          isActive && "opacity-100"
        )}
      />
        </Hint>
    </div>
  );
};
