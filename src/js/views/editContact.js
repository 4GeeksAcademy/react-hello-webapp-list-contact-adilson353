// import React, { useContext, useEffect, useState } from "react";
// import "../../styles/home.css";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const EditContact = () => {
//     const { store, actions } = useContext(Context);
//     const [edit, setEdit] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         address: ""
//     });
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const params = useParams();
//     const contactId = params.id;

//     useEffect(() => {
//         const fetchContact = async () => {
//             try {
//                 const response = await fetch(`https://playground.4geeks.com/contact/agendas/adilson353/contacts/${contactId}`, 
//                     {method: "PUT"}
//                 );

//                 if (!response.ok) {
                
//                     throw new Error("Error fetching contact");
//                 }
//                 const data = await response.json();
//                 setEdit(data);
//             } catch (error) {
//               error
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (contactId) {
//             fetchContact();
//         }
//     }, [contactId]);

//     const handleChange = (e) => {
//         setEdit({
//             ...edit,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async () => {
//         try {
//             const response = await fetch(`https://playground.4geeks.com/contact/agendas/adilson353/contacts/${contactId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(edit)
//             });
//             if (!response.ok) {
//                 throw new Error('Error updating contact');
//             }
//             // Assuming the API returns updated contact data, you can handle it here
//             const updatedContact = await response.json();
//             actions.editContact(updatedContact, contactId); // Update local state or context with the updated contact
//         } catch (error) {
//             console.error('Error updating contact:', error);
//             setError(error.message);
//         }
//     };

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="container">
//             <div className="d-flex justify-content-center align-items-center fs-1">
//                 <p>Edit Contact</p>
//             </div>
//             <form>
//                 <div className="mb-3">
//                     <label htmlFor="Name" className="form-label fw-bold">Full Name</label>
//                     <input type="text" className="form-control" id="Name" value={edit.name}
//                         name="name"
//                         onChange={handleChange} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="Email" className="form-label fw-bold">Email</label>
//                     <input type="email" className="form-control" id="Email" value={edit.email}
//                         name="email"
//                         onChange={handleChange} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="Phone" className="form-label fw-bold">Phone</label>
//                     <input type="text" className="form-control" id="Phone" value={edit.phone}
//                         name="phone"
//                         onChange={handleChange} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="Address" className="form-label fw-bold">Address</label>
//                     <input type="text" className="form-control" id="Address" value={edit.address}
//                         name="address"
//                         onChange={handleChange} />
//                 </div>
//                 <Link to="/">
//                     <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>
//                         Save Changes
//                     </button>
//                 </Link>
//                 <Link to="/">
//                     <a>or get back to contacts</a>
//                 </Link>
//             </form>
//         </div>
//     );
// };



import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const [edit, setEdit] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const contactId = parseInt(params.id); // Convert contactId to an integer

    useEffect(() => {
        const contact = store.contacts.find(contact => contact.id === contactId);
        if (contact) {
            setEdit(contact);
            setIsLoading(false);
        } else {
            setError("Contact not found");
            setIsLoading(false);
        }
    }, [contactId, store.contacts]);

    const handleChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            await actions.editContact(edit, contactId);
        } catch (error) {
            console.error("Error updating contact:", error);
            setError(error.message);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center fs-1">
                <p>Edit Contact</p>
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label fw-bold">Full Name</label>
                    <input type="text" className="form-control" id="Name" value={edit.name}
                        name="name"
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control" id="Email" value={edit.email}
                        name="email"
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Phone" className="form-label fw-bold">Phone</label>
                    <input type="text" className="form-control" id="Phone" value={edit.phone}
                        name="phone"
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Address" className="form-label fw-bold">Address</label>
                    <input type="text" className="form-control" id="Address" value={edit.address}
                        name="address"
                        onChange={handleChange} />
                </div>
                <Link to="/">
                    <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>
                        Save Changes
                    </button>
                </Link>
                <Link to="/">
                    <a>or get back to contacts</a>
                </Link>
            </form>
        </div>
    );
};
