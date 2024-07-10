import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import client from '../../services/restClient';
import _ from 'lodash';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg[key] = element.message;
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error: errorObj.message } : {};
};

const MailQuesCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();

    useEffect(() => {
        const init = {};
        set_entity({ ...init });
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};

        if (_.isEmpty(_entity?.name)) {
            error['name'] = `Name field is required`;
            ret = false;
        }

        if (_.isEmpty(_entity?.type)) {
            error['type'] = `Type field is required`;
            ret = false;
        }

        if (_.isEmpty(_entity?.data)) {
            error['data'] = `Data field is required`;
            ret = false;
        }

        if (_.isEmpty(_entity?.from)) {
            error['from'] = `From field is required`;
            ret = false;
        }

        if (_.isEmpty(_entity?.recipients)) {
            error['recipients'] = `Recipients field is required`;
            ret = false;
        }

        if (_.isEmpty(_entity?.status)) {
            error['status'] = `Status field is required`;
            ret = false;
        }

        if (_.isEmpty(_entity?.errors)) {
            error['errors'] = `Errors field is required`;
            ret = false;
        }

        if (_.isEmpty(_entity?.template)) {
            error['template'] = `Template field is required`;
            ret = false;
        }

        if (_.isEmpty(_entity?.content)) {
            error['content'] = `Content field is required`;
            ret = false;
        }
        if (!ret) setError(error);
        return ret;
    };

    const onSave = async () => {
        if (!validate()) return;
        let _data = {
            name: _entity?.name,
            type: _entity?.type,
            data: _entity?.data,
            from: _entity?.from,
            recipients: _entity?.recipients,
            status: _entity?.status,
            errors: _entity?.errors,
            template: _entity?.template,
            content: _entity?.content,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            const result = await client.service('mailQues').create(_data);
            props.onHide();
            props.alert({ type: 'success', title: 'Create info', message: 'Info Mail Ques created successfully' });
            props.onCreateResult(result);
        } catch (error) {
            console.log('error', error);
            setError(getSchemaValidationErrorsStrings(error) || 'Failed to create');
            props.alert({ type: 'error', title: 'Create', message: 'Failed to create in Mail Ques' });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    return (
        <Dialog header="Create Mail Ques" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: '40vw' }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto" style={{ maxWidth: '55vw' }} role="mailQues-create-dialog-component">
                <div className="col-12 md:col-6 field mt-5">
                    <span className="align-items-center">
                        <label htmlFor="name">Name:</label>
                        <InputText id="name" className="w-full mb-3 p-inputtext-sm" value={_entity?.name} onChange={(e) => setValByKey('name', e.target.value)} required />
                    </span>
                    <small className="p-error">
                        {!_.isEmpty(error['name']) ? (
                            <p className="m-0" key="error-name">
                                {error['name']}
                            </p>
                        ) : null}
                    </small>
                </div>
                <div className="col-12 md:col-6 field mt-5">
                    <span className="align-items-center">
                        <label htmlFor="type">Type:</label>
                        <InputText id="type" className="w-full mb-3 p-inputtext-sm" value={_entity?.type} onChange={(e) => setValByKey('type', e.target.value)} required />
                    </span>
                    <small className="p-error">
                        {!_.isEmpty(error['type']) ? (
                            <p className="m-0" key="error-type">
                                {error['type']}
                            </p>
                        ) : null}
                    </small>
                </div>
                <div className="col-12 md:col-6 field mt-5">
                    <span className="align-items-center">
                        <label htmlFor="data">Data:</label>
                        <InputText id="data" className="w-full mb-3 p-inputtext-sm" value={_entity?.data} onChange={(e) => setValByKey('data', e.target.value)} required />
                    </span>
                    <small className="p-error">
                        {!_.isEmpty(error['data']) ? (
                            <p className="m-0" key="error-data">
                                {error['data']}
                            </p>
                        ) : null}
                    </small>
                </div>
                <div className="col-12 md:col-6 field mt-5">
                    <span className="align-items-center">
                        <label htmlFor="from">From:</label>
                        <InputText id="from" className="w-full mb-3 p-inputtext-sm" value={_entity?.from} onChange={(e) => setValByKey('from', e.target.value)} required />
                    </span>
                    <small className="p-error">
                        {!_.isEmpty(error['from']) ? (
                            <p className="m-0" key="error-from">
                                {error['from']}
                            </p>
                        ) : null}
                    </small>
                </div>
                <div className="col-12 md:col-6 field mt-5">
                    <span className="align-items-center">
                        <label htmlFor="recipients">Recipients:</label>
                        <InputText id="recipients" className="w-full mb-3 p-inputtext-sm" value={_entity?.recipients} onChange={(e) => setValByKey('recipients', e.target.value)} required />
                    </span>
                    <small className="p-error">
                        {!_.isEmpty(error['recipients']) ? (
                            <p className="m-0" key="error-recipients">
                                {error['recipients']}
                            </p>
                        ) : null}
                    </small>
                </div>
                <div className="col-12 md:col-6 field mt-5">
                    <span className="align-items-center">
                        <label htmlFor="status">Status:</label>
                        <InputText id="status" className="w-full mb-3 p-inputtext-sm" value={_entity?.status} onChange={(e) => setValByKey('status', e.target.value)} required />
                    </span>
                    <small className="p-error">
                        {!_.isEmpty(error['status']) ? (
                            <p className="m-0" key="error-status">
                                {error['status']}
                            </p>
                        ) : null}
                    </small>
                </div>
                <div className="col-12 md:col-6 field mt-5">
                    <span className="align-items-center">
                        <label htmlFor="errors">Errors:</label>
                        <InputText id="errors" className="w-full mb-3 p-inputtext-sm" value={_entity?.errors} onChange={(e) => setValByKey('errors', e.target.value)} required />
                    </span>
                    <small className="p-error">
                        {!_.isEmpty(error['errors']) ? (
                            <p className="m-0" key="error-errors">
                                {error['errors']}
                            </p>
                        ) : null}
                    </small>
                </div>
                <div className="col-12 md:col-6 field mt-5">
                    <span className="align-items-center">
                        <label htmlFor="template">Template:</label>
                        <InputText id="template" className="w-full mb-3 p-inputtext-sm" value={_entity?.template} onChange={(e) => setValByKey('template', e.target.value)} required />
                    </span>
                    <small className="p-error">
                        {!_.isEmpty(error['template']) ? (
                            <p className="m-0" key="error-template">
                                {error['template']}
                            </p>
                        ) : null}
                    </small>
                </div>
                <div className="col-12 md:col-6 field mt-5">
                    <span className="align-items-center">
                        <label htmlFor="content">Content:</label>
                        <InputText id="content" className="w-full mb-3 p-inputtext-sm" value={_entity?.content} onChange={(e) => setValByKey('content', e.target.value)} required />
                    </span>
                    <small className="p-error">
                        {!_.isEmpty(error['content']) ? (
                            <p className="m-0" key="error-content">
                                {error['content']}
                            </p>
                        ) : null}
                    </small>
                </div>
                <small className="p-error">
                    {Array.isArray(Object.keys(error))
                        ? Object.keys(error).map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}: {error[e]}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(MailQuesCreateDialogComponent);
