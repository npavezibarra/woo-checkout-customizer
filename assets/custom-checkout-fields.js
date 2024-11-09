import { registerExperimentalBlockComponent } from '@woocommerce/blocks-checkout';
import { useCheckoutContext } from '@woocommerce/blocks-checkout';
import { TextControl } from '@wordpress/components';
import { useState } from 'react';

// Función para crear el formulario de envío personalizado
const CustomShippingAddressForm = () => {
    const { shippingAddress, setShippingAddress } = useCheckoutContext();
    
    // Manejar estados locales para los campos personalizados
    const [phone, setPhone] = useState(shippingAddress.phone || '');
    const [nickname, setNickname] = useState(shippingAddress.nickname || '');

    const handlePhoneChange = (value) => {
        setPhone(value);
        setShippingAddress({ ...shippingAddress, phone: value });
    };

    const handleNicknameChange = (value) => {
        setNickname(value);
        setShippingAddress({ ...shippingAddress, nickname: value });
    };

    return (
        <div>
            <h3>Dirección de Envío Personalizada</h3>
            <TextControl
                label="Nombre"
                value={shippingAddress.first_name || ''}
                onChange={(value) => setShippingAddress({ ...shippingAddress, first_name: value })}
            />
            <TextControl
                label="Comuna"
                value={shippingAddress.city || ''}
                onChange={(value) => setShippingAddress({ ...shippingAddress, city: value })}
            />
            <TextControl
                label="Celular"
                value={phone}
                onChange={handlePhoneChange}
            />
            <TextControl
                label="Apodo"
                value={nickname}
                onChange={handleNicknameChange}
            />
        </div>
    );
};

// Función para crear el formulario de facturación personalizado
const CustomBillingAddressForm = () => {
    const { billingAddress, setBillingAddress } = useCheckoutContext();

    // Manejar estados locales para los campos personalizados
    const [phone, setPhone] = useState(billingAddress.phone || '');
    const [nickname, setNickname] = useState(billingAddress.nickname || '');

    const handlePhoneChange = (value) => {
        setPhone(value);
        setBillingAddress({ ...billingAddress, phone: value });
    };

    const handleNicknameChange = (value) => {
        setNickname(value);
        setBillingAddress({ ...billingAddress, nickname: value });
    };

    return (
        <div>
            <h3>Dirección de Facturación Personalizada</h3>
            <TextControl
                label="Nombre"
                value={billingAddress.first_name || ''}
                onChange={(value) => setBillingAddress({ ...billingAddress, first_name: value })}
            />
            <TextControl
                label="Comuna"
                value={billingAddress.city || ''}
                onChange={(value) => setBillingAddress({ ...billingAddress, city: value })}
            />
            <TextControl
                label="Celular"
                value={phone}
                onChange={handlePhoneChange}
            />
            <TextControl
                label="Apodo"
                value={nickname}
                onChange={handleNicknameChange}
            />
        </div>
    );
};

// Reemplaza los componentes de WooCommerce Blocks con los personalizados
registerExperimentalBlockComponent('core/checkout/shipping-address', CustomShippingAddressForm);
registerExperimentalBlockComponent('core/checkout/billing-address', CustomBillingAddressForm);
