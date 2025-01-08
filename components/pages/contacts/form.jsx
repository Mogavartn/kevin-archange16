import React from 'react';

const FormArea = () => {
    return (
        <>
            <form action="#">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="contact__form-area-item">
                            <input type="text" name="first_name" placeholder="Prénom" required="required" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="contact__form-area-item">
                            <input type="text" name="last_name" placeholder="Nom" required="required" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="contact__form-area-item">
                            <input type="text" name="company" placeholder="Société (si applicable)" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="contact__form-area-item">
                            <input type="text" name="subject" placeholder="Objet du message" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="contact__form-area-item">
                            <textarea name="message" placeholder="Message" required="required"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12 mb-4">
                        <div className="contact__two-right-form-item">
                            <button className="btn-one" >Envoyer</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default FormArea;