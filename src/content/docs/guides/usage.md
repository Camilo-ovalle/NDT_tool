---
title: 🚀 Using NDT Tool
description: A guide in my new Starlight docs site.
---

1. **Run the Script**

   - Double-click on `Network_Diagnostic_Tool.cmd`.

2. **Select Campaign**

   - Choose a campaign from the menu (by number).

![git placeholder](/tool_menu_1.png)

3. **Choose Target**

   - Select the site or tool you want to diagnose.

![git placeholder](/tool_menu_2.png)

4. **Run Diagnostics**

   - The script will automatically run the following commands:
     - `ipconfig /all`
     - `ping [url]`
     - `tracert -h 15 [url]`
     - `nslookup [url]`

5. **Results**

   - The results will be saved automatically as a `.txt` file on the desktop.
   - The exact file path will be displayed and opened in Notepad.

---

## 📂 Example Log File Location

- **_C:\Users\user\Desktop\logs_app1_2025-05-09.txt_**

![git placeholder](/tool_patch.png)
