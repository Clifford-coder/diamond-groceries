/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import API from '../../network/api';

const paymentCard = () => {
  const [deliveries, setDeliveries] = React.useState(null);
  const [cities, setCities] = React.useState([]);
  const [selectedRegion, setSelectedRegion] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState('');
  const [deliveryFee, setDeliveryFee] = React.useState(null);
  const [deliveryOption, setDeliveryOption] = React.useState('');

  const regions = [
    { name: 'Select Region', value: '' },
    { name: 'Ashanti', value: 'Ashanti' },
    { name: 'Greater Accra', value: 'GreaterAccra' },
  ];

  React.useEffect(() => {
    (async () => {
      const response = await API.get('/delivery-fees');
      setDeliveries(response.data);
    })();
  }, []);

  // set respective cities according to selected region
  React.useEffect(() => {
    if (!deliveries) return;
    const filterCities = deliveries.filter((delivery) => {
      return delivery.region === selectedRegion;
    });
    setCities(filterCities);
  }, [selectedRegion, deliveries]);

  // set respective delivery fee according to the selected city
  React.useEffect(() => {
    if (cities.length === 0) return;
    const filteredFee = cities.filter((city) => {
      return city.city === selectedCity;
    });
    setDeliveryFee(filteredFee[0]?.fee);
  }, [selectedCity, cities]);

  const handlePlaceOrder = () => {
    console.log('delivery option  --- ', deliveryOption);
  };

  if (!deliveries) return null;

  return (
    <>
      <div className="payment-box">
        <h4>How do you want it to be delivered?</h4>
        <div className="payment-method">
          <p>
            <input
              type="radio"
              id="pickup"
              name="delivery"
              value="pickup"
              onChange={(e) => setDeliveryOption(e.target.value)}
            />
            <label htmlFor="pickup">Pick it up from station</label>
          </p>
          {deliveryOption === 'pickup' ? (
            <div className="col-lg-12 col-md-12">
              <div style={{ marginBottom: '1rem' }} className="form-group">
                <label>
                  Region <span className="required">*</span>
                </label>
                <div className="select-box">
                  <select
                    className="form-control"
                    name="selected_region"
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    value={selectedRegion}
                  >
                    {regions.map((region) => (
                      <option key={region.name} value={region.value}>
                        {region.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {cities.length === 0 ? null : (
                <div style={{ marginBottom: '1rem' }} className="form-group">
                  <label>
                    City <span className="required">*</span>
                  </label>
                  <div className="select-box">
                    <select
                      className="form-control"
                      name="selected_region"
                      onChange={(e) => setSelectedCity(e.target.value)}
                      value={selectedCity}
                    >
                      {cities.map((city) => (
                        <option key={city.id} value={city.city}>
                          {city.city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          ) : null}
          <p>
            <input
              type="radio"
              id="doorstep"
              name="delivery"
              value="doorstep"
              onChange={(e) => {
                setDeliveryFee(30); // doorstep delivery fee.
                setDeliveryOption(e.target.value);
              }}
            />
            <label htmlFor="doorstep">Doorstep delivery</label>
          </p>
          {deliveryFee && selectedRegion && (
            <p>
              Delivery fee is
              <b> GH₵ {deliveryFee}</b>
            </p>
          )}
        </div>
      </div>
      <div className="payment-box">
        <h4>How do you want pay?</h4>
        <div className="payment-method">
          <p>
            <input type="radio" id="momo" name="payment" />
            <label htmlFor="momo">Mobile Money</label>
          </p>
          <p>
            <input type="radio" id="cash-on-delivery" name="payment" />
            <label htmlFor="cash-on-delivery">Cash on Delivery</label>
          </p>
        </div>

        <div
          className="form-check"
          style={{
            marginTop: '16px',
            marginBottom: '16px',
            fontWeight: 'bold',
          }}
        >
          <input
            type="checkbox"
            className="form-check-input"
            id="agree_to_terms"
            name="agree_to_terms"
          />
          <label className="form-check-label" htmlFor="agree_to_terms">
            <em
              style={{
                fontWeight: 'bold',
              }}
            >
              I agree with the terms and conditions
            </em>
          </label>
        </div>
        <span onClick={handlePlaceOrder} className="default-btn">
          Place Order
        </span>
      </div>
    </>
  );
};

export default paymentCard;
