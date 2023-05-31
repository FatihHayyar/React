
const Jsx1 = () => {
    const name = "John Doe";
    const user={
        name:"Jonathan",
        age:30,
    };
   const yas=36;
    return (
        <>
            <p>
                Butun JSX kodlari bir element icinde olmalidir.
            </p>
            <p>
                Merhaba {name}
            </p>
            <h2>Personel Info</h2>
            <p>Kullanici Adi: {user.name}</p>
            <p>Kullanici Yasi: {user.age}</p>
            {
                yas>30 ? (<p>orta yasli</p>) : (<p>Genc</p>)
            }

            
            {
                yas===36&& <p>Tam zamani</p>
            }
        </>
    )
};
export default Jsx1;