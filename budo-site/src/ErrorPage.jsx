import { Home } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage(){
    return(
        <div className="grid h-screen w-screen px-4 bg-white place-content-center">
            <div className="text-center">
              <h1 className="font-black text-gray-200 text-9xl">404</h1>

              <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Uh-oh!
              </p>

            	<p className="mt-4 text-gray-500">We can't find that page.</p>
							<div className="buttonHome">
								<Link to='/'>
									<Button variant="contained" style={{backgroundColor: "rgb(79 70 229)"}}>
										<p>go Back Home</p>
									</Button>
								</Link>
							</div>
            </div>
        </div>
    )
}