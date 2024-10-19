Here's a fun and informative README for a DNS server project, designed with emojis, fonts, and descriptive sections for GitHub.

---

# 🌐 DNS Server 🖥️

### A lightweight DNS server project to handle DNS queries with speed and accuracy! ⚡

---

## 📚 Overview

This project is a custom **DNS server** implementation using Node.js. It handles **DNS queries** and provides responses by resolving domain names to their corresponding IP addresses. Perfect for understanding the basics of networking and DNS or setting up a local DNS service!

---

## 🚀 Features

- 📝 **Customizable DNS Records** – Add, remove, or modify DNS entries easily.
- ⚡ **Fast and Lightweight** – Built with performance in mind, responds quickly to client queries.
- 🔒 **Security Configurations** – Optional features for rate limiting, logging, and filtering malicious requests.
- 📊 **Statistics** – Track DNS query stats to monitor performance and usage.

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HarromPS/DNS-Server
   ```
2. Navigate to the project directory:
   ```bash
   cd DNS-Server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the server:
   ```bash
   node index.js

   // OR

   nodemon index.js
   ```

---

## 🔧 Configuration

Configure your DNS records in the `dnsRecords.json` file. Here is an example:

```json
{
  "db":{
        "hellobaccho.dev": {
            "type": "A",
            "data": "1.2.3.4"
        },
        "123.hellobaccho.com": {
            "type": "CNAME",
            "data": "abc.hello.com"
        },
        "abc.hello.com": {
            "type": "A",
            "data": "2.3.1.4"
        }
    }
}
```

Change your DNS server's IP address and port by modifying the `config.js` file.

---

## 🖥️ Usage

1. **Start the DNS Server**: After installation, start the server by running the following command:
   ```bash
   node index.js

   // OR

   nodemon index.js
   ```

2. **Point Your System to the Server**: Configure your system to use the custom DNS server by changing DNS settings to point to `127.0.0.1` (or your server IP) and port `8087`.

3. **Test with dig**: You can query the server using the `dig` tool:
   ```bash
    dig @localhost -p 8087 hellobaccho.dev   
   ```
---

## 📈 DNS Records Management

- Easily add or remove DNS records in the `dnsRecords.json` file.
- Reload the server after changes:
   ```bash
   node server.js
   ```

---

## 🌍 Example Queries

1. Query for `google.com`:
   ```bash
    dig @localhost -p 8087 hellobaccho.dev
   ```
   Output:
   ```
   ;; ANSWER SECTION:
   hellobaccho.dev.        0       IN      A       1.2.3.4
   ```

2. Query for `example.com`:
   ```bash
    dig @localhost -p 8087 123.hellobaccho.com
   ```
   Output:
   ```
   ;; ANSWER SECTION:
   123.hellobaccho.com.    0       IN      A       2.3.1.4
   ```

---


## 🌟 Some Notes

## Types of DNS Records

Here are some of the main types of DNS records:

### 1. **A (Address) Record**:
   - Maps a domain name to an IPv4 address.
   - Example: `example.com` → `192.0.2.1`

### 2. **AAAA (Quad-A) Record**:
   - Maps a domain name to an IPv6 address.
   - Example: `example.com` → `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

### 3. **CNAME (Canonical Name) Record**:
   - Maps an alias domain name to the canonical (true) domain name.
   - Example: `www.example.com` → `example.com`

### 4. **MX (Mail Exchange) Record**:
   - Specifies the mail servers responsible for receiving email on behalf of a domain.
   - Example: `example.com` → `mail.example.com`

### 5. **TXT (Text) Record**:
   - Holds text information, often used for verification (e.g., SPF, DKIM for email security).
   - Example: `example.com` → `v=spf1 include:_spf.example.com ~all`

### 6. **NS (Name Server) Record**:
   - Specifies the authoritative DNS servers for a domain.
   - Example: `example.com` → `ns1.example.com, ns2.example.com`

### 7. **PTR (Pointer) Record**:
   - Maps an IP address to a domain name (used for reverse DNS lookups).
   - Example: `192.0.2.1` → `example.com`

### 8. **SRV (Service) Record**:
   - Specifies the location (hostname and port) of services such as VoIP or instant messaging.
   - Example: `_sip._tcp.example.com` → `10 60 5060 sipserver.example.com`

### 9. **SOA (Start of Authority) Record**:
   - Contains administrative information about a domain, such as the primary name server and email address of the domain admin.
   - Example: Primary NS, admin email, serial number, refresh rate, retry interval, etc.

### 10. **CAA (Certification Authority Authorization) Record**:
   - Specifies which certificate authorities (CAs) are allowed to issue SSL/TLS certificates for a domain.
   - Example: `example.com` → `0 issue "letsencrypt.org"`

### 11. **NAPTR (Naming Authority Pointer) Record**:
   - Used for specifying rules for regular expression-based rewriting of domain names, mainly in services like VoIP.

### 12. **SPF (Sender Policy Framework)**:
   - A type of TXT record that defines which IP addresses are allowed to send emails on behalf of a domain, used to prevent email spoofing.

These DNS records work together to direct various types of traffic and services for a domain, from web traffic to email handling and more.

---


## 🌟 Contributions

Contributions are always welcome! Please follow these steps to contribute:

1. Fork the project.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add a feature'`.
4. Push the branch: `git push origin feature/your-feature`.
5. Open a Pull Request.

---

### 🌐 Stay Connected

- **GitHub**: [HarromPS](https://github.com/HarromPS/)
- **Linkedin**: [HariomShivhare](https://www.linkedin.com/in/hariom-shivhare-a32803290/)

---

Enjoy managing your DNS with 🚀 speed and 🎯 precision!

---