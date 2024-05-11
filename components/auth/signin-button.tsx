import { SignIn } from "@clerk/nextjs"

export const SigInButton = () => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <SignIn/>
        </div>
    )
}