

// const getState = ({ getStore, getActions, setStore }) => {
//     return {
//         store: {
//             contacts: [],
//             agenda: "adilson353"
//         },
//         actions: {
          
//             addContact: async (contact) => {
//                 const agendaName = getStore().agenda;
//                 try {
//                     const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts`, {
//                         method: "POST",
//                         body: JSON.stringify(contact),
//                         headers: {
//                             "Content-Type": "application/json"
//                         }
//                     });
//                     if (!response.ok) {
//                         throw Error("Error creating contact");
//                     }
//                     const data = await response.json();
//                     setStore({ contacts: [...getStore().contacts, data] });
//                 } catch (error) {
//                     console.error("Error adding contact:", error);
//                 }
//             },

//             getContacts: async () =>  { 
//                 const agendaName = getStore().agenda;
//                 try {
//                     const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}`);
//                     if (response.status === 404) {
//                         await getActions().createAgenda();
//                         await getActions().getContacts();
//                     }
//                     if (!response.ok) {
//                         throw Error("Error fetching contacts");
//                     }
//                     const data = await response.json();
//                     setStore({ contacts: data.contacts });
//                 } catch (error) {
//                     console.error("Error getting contacts:", error);
//                 }
//             },

//             editContact: async (contact, id) => {
//                 const agendaName = getStore().agenda;
//                 try {
//                     const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${id}`, {
//                         method: "PUT",
//                         body: JSON.stringify(contact),
//                         headers: {
//                             "Content-Type": "application/json"
//                         }
//                     });
//                     if (response.ok) {
//                         const actions = getActions();
//                         actions.getContacts();
//                     } else {
//                         throw Error("Error updating contact");
//                     }
//                 } catch (error) {
//                     console.error("Error editing contact:", error);
//                 }
//             },

//             createAgenda: async () => {
//                 const agendaName = getStore().agenda;
//                 try {
//                     const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}`, {
//                         method: "POST",
//                         body: JSON.stringify({}),
//                         headers: {
//                             "Content-Type": "application/json"
//                         }
//                     });
//                     if (response.ok) {
//                         const newAgenda = await response.json();
//                         console.log("agenda creada:", newAgenda);
                    
//                     }
//                 } catch (error) {
//                     console.error("Error creating agenda:", error);
//                 }
//             },

//             deleteContact: async (id) => {
//                 const agendaName = getStore().agenda;
//                 try {
//                     const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${id}`, {
//                         method: "DELETE"
//                     });
//                     if (response.ok) {
//                         getActions().getContacts();
//                         const contactsUpdated = getStore().contacts.filter(contact => contact.id !== id);
//                         setStore({ contacts: contactsUpdated });
//                     } else {
//                         throw Error("Error deleting contact");
//                     }
//                 } catch (error) {
//                     console.error("Error deleting contact:", error);
//                 }
//             },
//         },
//     };
// };

// export default getState;


// const getState = ({ getStore, getActions, setStore }) => {
//     return {
//         store: {
//             contacts: [],
//             agenda: "adilson353"
//         },
//         actions: {
//             addContact: async (contact) => {
//                 // Add contact to the specified agenda
//                 const agendaName = getStore().agenda;
//                 try {
//                     const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts`, {
//                         method: "POST",
//                         body: JSON.stringify(contact),
//                         headers: {
//                             "Content-Type": "application/json"
//                         }
//                     });
//                     if (!response.ok) {
//                         throw Error("Error creating contact");
//                     }
//                     const data = await response.json();
//                     // Update store with the new contact
//                     setStore({ contacts: [...getStore().contacts, data] });
//                 } catch (error) {
//                     console.error("Error adding contact:", error);
//                 }
//             },

//             getContacts: async () => {
//                 // Fetch contacts for the specified agenda
//                 const agendaName = getStore().agenda;
//                 try {
//                     const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}`);
//                     if (response.status === 404) {
//                         // If agenda not found, create it and fetch contacts again
//                         await getActions().createAgenda();
//                         await getActions().getContacts();
//                     }
//                     if (!response.ok) {
//                         throw Error("Error fetching contacts");
//                     }
//                     const data = await response.json();
//                     // Update store with fetched contacts
//                     setStore({ contacts: data.contacts });
//                 } catch (error) {
//                     console.error("Error getting contacts:", error);
//                 }
//             },

//             editContact: async (contact, id) => {
//                 // Edit a contact with specified ID in the agenda
//                 const agendaName = getStore().agenda;
//                 try {
//                     const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${id}`, {
//                         method: "PUT",
//                         body: JSON.stringify(contact),
//                         headers: {
//                             "Content-Type": "application/json"
//                         }
//                     });
//                     if (response.ok) {
//                         // If edit successful, fetch updated contacts
//                         const actions = getActions();
//                         actions.getContacts();
//                     } else {
//                         throw Error("Error updating contact");
//                     }
//                 } catch (error) {
//                     console.error("Error editing contact:", error);
//                 }
//             },

//             createAgenda: async () => {
//                 // Create a new agenda
//                 const agendaName = getStore().agenda;
//                 try {
//                     const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}`, {
//                         method: "POST",
//                         body: JSON.stringify({}),
//                         headers: {
//                             "Content-Type": "application/json"
//                         }
//                     });
//                     if (response.ok) {
//                         const newAgenda = await response.json();
//                         console.log("agenda created:", newAgenda);
//                         // Optionally update store or handle response
//                     }
//                 } catch (error) {
//                     console.error("Error creating agenda:", error);
//                 }
//             },

//             deleteContact: async (id) => {
//                 // Delete a contact with specified ID from the agenda
//                 const agendaName = getStore().agenda;
//                 try {
//                     const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${id}`, {
//                         method: "DELETE"
//                     });
//                     if (response.ok) {
//                         // If delete successful, fetch updated contacts and update store
//                         getActions().getContacts();
//                         const contactsUpdated = getStore().contacts.filter(contact => contact.id !== id);
//                         setStore({ contacts: contactsUpdated });
//                     } else {
//                         throw Error("Error deleting contact");
//                     }
//                 } catch (error) {
//                     console.error("Error deleting contact:", error);
//                 }
//             },
//         },
//     };
// };

// export default getState;



const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            agenda: "adilson353"
        },
        actions: {
            addContact: async (contact) => {
                const agendaName = getStore().agenda;
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts`, {
                        method: "POST",
                        body: JSON.stringify(contact),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    if (!response.ok) {
                        throw Error("Error creating contact");
                    }
                    const data = await response.json();
                    setStore({ contacts: [...getStore().contacts, data] });
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },

            getContacts: async () => {
                const agendaName = getStore().agenda;
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}`);
                    if (response.status === 404) {
                        await getActions().createAgenda();
                        await getActions().getContacts();
                    }
                    if (!response.ok) {
                        throw Error("Error fetching contacts");
                    }
                    const data = await response.json();
                    setStore({ contacts: data.contacts });
                } catch (error) {
                    console.error("Error getting contacts:", error);
                }
            },

            getContactById: async (id) => {
                const agendaName = getStore().agenda;
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${id}`);
                    if (!response.ok) {
                        throw Error("Error fetching contact");
                    }
                    const data = await response.json();
                    return data;
                } catch (error) {
                    console.error("Error fetching contact by ID:", error);
                    throw error;
                }
            },

            editContact: async (contact, id) => {
                const agendaName = getStore().agenda;
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${id}`, {
                        method: "PUT",
                        body: JSON.stringify(contact),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    if (response.ok) {
                        const actions = getActions();
                        actions.getContacts();
                    } else {
                        throw Error("Error updating contact");
                    }
                } catch (error) {
                    console.error("Error editing contact:", error);
                    throw error;
                }
            },

            createAgenda: async () => {
                const agendaName = getStore().agenda;
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}`, {
                        method: "POST",
                        body: JSON.stringify({}),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    if (response.ok) {
                        const newAgenda = await response.json();
                        console.log("agenda created:", newAgenda);
                    }
                } catch (error) {
                    console.error("Error creating agenda:", error);
                }
            },

            deleteContact: async (id) => {
                const agendaName = getStore().agenda;
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (response.ok) {
                        getActions().getContacts();
                        const contactsUpdated = getStore().contacts.filter(contact => contact.id !== id);
                        setStore({ contacts: contactsUpdated });
                    } else {
                        throw Error("Error deleting contact");
                    }
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            },
        },
    };
};

export default getState;
