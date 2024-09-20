# Daily Weather Summary

This Node-RED flow allows you to display a daily weather summary for a selected location using the Weather API. The summary includes the weather condition (e.g., "Sunny", "Cloudy") and the temperature in Celsius.

## Prerequisites

- [Node-RED](https://nodered.org/) installed
- [WeatherAPI](https://www.weatherapi.com/) account and API key
- Node-RED Dashboard nodes installed (`node-red-dashboard`)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/keerthigatla/weather-summary.git
   cd weather-summary
   ```

2. **Import the Flow**

   - Open the Node-RED editor by navigating to `http://localhost:1880` in your web browser.
   - Click on the menu (top right corner) and select `Import`.
   - Paste the JSON code from the `flow.json` file in this repository and click `Import`.

3. **Configure the API Key**

   - Double-click the `http request` node in the Node-RED editor.
   - Replace `YOUR_API_KEY` with your actual Weather API key.

## How to Get an API Key

1. **Sign Up for WeatherAPI**

   - Go to [WeatherAPI](https://www.weatherapi.com/).
   - Click on the `Sign Up` button and create an account.
   - After signing up, log in to your account.

2. **Generate an API Key**

   - Once logged in, navigate to the `API Keys` section in your account dashboard.
   - Click on `Generate API Key` and copy the key provided.

## Usage

1. **Deploy the Flow**

   - Click the `Deploy` button in the top right corner of the Node-RED editor.

2. **Enter Location**

   - Open the Node-RED dashboard by navigating to `http://localhost:1880/ui` in your web browser.
   - Enter the desired location in the "Enter Location" field and select the country from the dropdown menu.

3. **View Weather Summary**

   - The weather summary will be displayed on the dashboard, showing the current weather condition and temperature for the selected location.

## Flow Details

- **UI Text Input Node**: Allows the user to enter the location.
- **UI Dropdown Node**: Allows the user to select the country.
- **Change Node**: Sets the location in the message payload.
- **HTTP Request Node**: Fetches the weather data from the Weather API.
- **Function Node**: Formats the weather summary.
- **UI Text Node**: Displays the weather summary on the dashboard.

## Example Flow

```plaintext
[UI Text Input Node] --> [Change Node] --> [HTTP Request Node] --> [Function Node] --> [UI Text Node]
```

## Function Node Code

```javascript
const weather = msg.payload.current;
const location = msg.payload.location;
const current = msg.payload.current;
const condition = msg.payload.current;
msg.payload = {
    city: location.name,
    region: location.region,
    country: location.country,
    celsius: current.temp_c,
    weathercondition: current.condition.text,
    weatherbrief: current.condition.text + ", " + current.temp_c + "°C",
};
return msg;
```

## Using JavaScript Nodes in Node-RED

1. **Function Node**

   - The Function node allows you to write custom JavaScript code to process messages.
   - Example:

     ```javascript
     const weather = msg.payload.current;
     const location = msg.payload.location;
     msg.payload = {
         city: location.name,
         region: location.region,
         country: location.country,
         celsius: weather.temp_c,
         weathercondition: weather.condition.text,
     };
     return msg;
     ```

2. **Change Node**

   - The Change node allows you to set, change, or delete properties of the message object without writing code.
   - Example:

     ```plaintext
     [Change Node] --> [Function Node]
     ```

3. **Debug Node**

   - The Debug node helps you inspect the messages passing through your flow.
   - Example:

     ```plaintext
     [Function Node] --> [Debug Node]
     ```

## Contact

For any questions or support, please contact:

- **Keerthi**: [keerthi.ece.software@gmail.com](mailto:keerthi.ece.software@gmail.com)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Node-RED](https://nodered.org/)
- [WeatherAPI](https://www.weatherapi.com/)
