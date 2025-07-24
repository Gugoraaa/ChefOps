import MenuTabs from "@components/Menutabs";
import NavBar from "@components/NavBar";
import { Outlet } from "react-router-dom";

 
export default function Dashboard() {  

    return(
        
        <section>
            <NavBar />
            <MenuTabs/>
            <main className="mx-40">
                <Outlet />
            </main>
        </section>     
    )
}