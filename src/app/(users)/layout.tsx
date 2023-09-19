
import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex justify-between h-full max-w-full max-h-full overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Navbar />
                <main className="flex p-5 h-full w-full">
                    {children}
                </main>
            </div>
        </div>
    )
}