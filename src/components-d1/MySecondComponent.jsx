const MySecondComponent = ({titleText, myClass}) => 
    <h1 className={myClass}>{titleText || "Musi was here first"}</h1>

export default MySecondComponent
