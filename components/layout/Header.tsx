import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Bell } from 'lucide-react'
import { Search } from 'lucide-react'
import { RefreshCw } from 'lucide-react'
import { Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Separator } from '../ui/separator'
import { IoMdArrowDropdown } from 'react-icons/io'
import { GiWallet } from "react-icons/gi";
import { RiSettings3Fill } from "react-icons/ri";


const Header = () => {
    return (
        <div>
            <header className="flex items-center justify-between px-6 py-4 border-b border-border relative z-10">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <Avatar className='w-10 h-10'>
                            <AvatarImage src="/images/boy.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Ryan Crawford</span>
                                <Badge variant='outline'>PRO</Badge>
                            </div>
                            <span className="text-sm text-muted-foreground">@ryanf7</span>
                        </div>
                        <IoMdArrowDropdown className="w-6 h-6" />
                    </div>

                    <div className="h-8 w-px bg-linear-to-b from-border/40 via-border to-border/40 shrink-0" />

                    <Button className='rounded-2xl'>
                        Deposit
                        <GiWallet className="w-4 h-4" />
                    </Button>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className='border-t border-l border-border bg-muted hover:bg-muted/80'>
                        <Bell className="w-4 h-4" />
                    </Button>
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 bg-muted rounded-lg text-sm w-64"
                        />
                    </div>
                    <Button variant="ghost" size="icon" className='border-t border-l border-border bg-muted hover:bg-muted/80'>
                        <RefreshCw className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" className='border-t border-l border-border bg-muted hover:bg-muted/80'>
                        Settings <RiSettings3Fill className="w-4 h-4" />
                    </Button>
                </div>
            </header></div>
    )
}

export default Header