import React,{Fragment} from 'react'

const styles={
    color:'red',
    fontSize:'30px'
}
function App(){
    return(
        <Fragment>
            <div style={styles}>
                <h1>Internal style in Reactjs</h1>
            </div>
            <div style={{color:'blue',fontSize:'30px'}}>
                <h1>Inline Style in Reactjs</h1>
            </div>
        </Fragment>
    )
}
export default App;