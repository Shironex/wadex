import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const NavBar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <h1 className="mx-2 text-md font-medium">Wadex Umowy</h1>
        <nav className={"flex items-center space-x-4 lg:space-x-6 mx-5"}>
          <Link
            href="/dashboard/overiew"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Podsumowanie
          </Link>
          <Link
            href="/dashboard/expired-contracts"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Wygaśnięte umowy
          </Link>
          <Link
            href="/dashboard/clients"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Klienci
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">shadcn</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    m@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
