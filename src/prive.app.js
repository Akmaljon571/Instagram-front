import Container from "./components/container/container";
import Login from "./components/login/login";
import Registor from "./components/registor/registor";
import useStart from "./hooks/useStart";


function Prive() {
    const { logRes } = useStart()
    return ( 
        <div className="prive">
            <Container>
                {logRes ? <Login /> : <Registor />}
            </Container>
        </div>
     );
}

export default Prive;