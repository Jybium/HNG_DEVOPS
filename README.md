# Number Classification API

## 📜 **Overview**
This API classifies numbers based on mathematical properties like primality, Armstrong status, parity (odd/even), and digit sum. It also provides a fun fact about the number using the Numbers API.

---

## 🚀 **Tech Stack**
- **Node.js**
- **Express.js**
- **Axios** (for external API calls)
- **CORS** (to handle cross-origin requests)

---

## ⚙️ **Features**
- Check if a number is **prime**.
- Identify **Armstrong numbers**.
- Determine if the number is **even** or **odd**.
- Calculate the **digit sum**.
- Fetch a **fun fact** from the Numbers API.

---

## 📩 **API Endpoint**
### `GET /api/classify-number?number=<number>`

### ✅ **Response (200 OK):**
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### ❌ **Response (400 Bad Request):**
```json
{
  "number": "invalid_input",
  "error": true
}
```

---

## 🚀 **Deployment**
- Hosted on **DigitalOcean** for public access.
- [Live API](http://64.23.242.49/api/classify-number?number=371)

---

## 🛠️ **Setup & Run Locally**
```bash
# Clone the repository
git clone https://github.com/jybium/HNG_DEVOPS/number-classification.git
cd number-classification-api

# Install dependencies
npm install

# Run the server
node index.js
```
Access the API: [http://localhost:4000/api/classify-number?number=371](http://localhost:4000/api/classify-number?number=371)

---

## 🚧 **Error Handling**
- Invalid inputs return a 400 error with an error message.
- Graceful fallback if the Numbers API fails.


## 📚 **References**
- [Numbers API](http://numbersapi.com/#42)
- [Parity (Mathematics)](https://en.wikipedia.org/wiki/Parity_(mathematics))

---

## 📄 **License**
MIT License. See [LICENSE](LICENSE) for details.
