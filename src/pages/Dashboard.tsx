import NavBar from "@components/NavBar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {  
    return(
        
        <section>
            <NavBar />
            <main className="">
                <Outlet />
            </main>
        </section>     
    )
}