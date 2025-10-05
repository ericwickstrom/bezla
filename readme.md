# Pre-Screening Assessment
## Web Developer Practical Assessment: Hotel KPI Calculator

Thank you for your interest in the Web Developer position at **Bezla.com**. To help us understand your skills, we've prepared a practical coding assessment.

---

## The Task

Your task is to build a small, interactive dashboard for calculating key hotel performance indicators (KPIs). You will build the interface and the logic from scratch, then record a short screen-share video (5-10 minutes) demonstrating the final product and explaining your code.

---

## Project Requirements

* **Technology:** Please use only HTML, CSS, and vanilla JavaScript. Do not use any libraries or frameworks (like React, Vue, jQuery, etc.).
* **Styling:** The design should be clean, professional, user-friendly, and responsive.
* **Code:** Your code should be clean, readable, and well-organized. We value clarity and maintainability.

---

## Dashboard Functionality

The dashboard should allow a user to enter core metrics for a hotel and see the key performance indicators calculated in real-time.

### 1. Core Inputs
Create number input fields for the following:
* Total Rooms Available
* Rooms Sold
* Total Room Revenue ($)

### 2. Calculated Outputs
The application must calculate and display the following KPIs based on the inputs. These outputs should update automatically whenever an input value changes.
* Occupancy (%)
* Average Daily Rate (ADR) ($)
* Revenue Per Available Room (RevPAR) ($)

### 3. Calculation Formulas
You must use the following standard industry formulas:
* **Occupancy (%)** = (Rooms Sold / Total Rooms Available) × 100
* **ADR ($)** = Total Room Revenue / Rooms Sold
* **RevPAR ($)** = Total Room Revenue / Total Rooms Available

---

## Important Details

* Format all monetary values as currency (e.g., **$125.50**).
* Format Occupancy as a percentage with two decimal places (e.g., **82.25%**).
* Your application should handle potential errors gracefully. For example, if Rooms Sold is 0, what should the ADR be? If Total Rooms Available is 0, what should Occupancy and RevPAR be? Displaying **$0.00** or **N/A** is acceptable.

---

## Video Submission Requirements

Please record a screen-share video (**5-10 minutes long**) where you:

1. **Introduce yourself briefly.**

2. **Demonstrate the finished KPI calculator** in the browser. Show it working by changing the input values and ensuring the calculations are correct.

3. **Walk us through your code** (HTML, CSS, and JavaScript files).

4. **Explain your approach:**
   * How did you structure your project?
   * How did you implement the real-time calculation logic in JavaScript?
   * How did you handle edge cases like division by zero?