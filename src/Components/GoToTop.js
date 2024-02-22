const GoToTop = ()=>{
    const goToBtn = ()=>{
        window.scrollTo({top:0, left:0, behaviour:'smooth'})
    };
    
    return(
        <>
     <div className="container">
        <div className="row">
            <div className="col-md-11">

            </div>
            <div className="col-md-1">
            <button className="top-btn" onClick={goToBtn}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg></button>
            </div>
        </div>
     </div>
       
       
    
        </>
    )
   

};

// const Wrapper = style.section`
// display:flex ;
// justify-content : center ;
// align-item : center;

// .top-btn{
//     font-size :2.4rem;
//     width :6rem;
//     height:6rem;
//     color:#fff;
//     background-color :${({theme})=>theme.colors.btn};
//     box-shadow:${({theme})=>theme.colors.shadow};
//     border-radius:50%;
//     position : fixed;
//     bottom :5rem;
//     right : 5rem;
//     z-index:999;
//     display:flex;
//     justify-content:center;
//     align-item :center;
//     cursor:pointer;
// }
// `;
export default GoToTop;