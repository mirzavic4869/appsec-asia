export const webAttacksData = [
  {
    category: 'Information Gathering',
    test: [
      {
        text: 'Search engine discovery / reconnaissance',
      },
      {
        text: 'Web application fingerprint',
      },
      {
        text: 'Review Webpage Comments and Metadata for Information Leakage',
      },
      {
        text: 'Application entry points Identification',
      },
      {
        text: 'Execution paths mapping',
      },
      {
        text: 'Web application framework fingerprinting',
      },
      {
        text: 'Web application fingerprinting',
      },
      {
        text: 'Application architecture mapping',
      },
      {
        text: 'Information Disclosure by error codes',
      },
      {
        text: 'SSL Weakness – SSL/TLS Testing (SSL Version, Algorithms, Key length, Digital Cert. Validity)',
      },
    ],
  },
  {
    category: 'Configuration and Deploy Management Testing',
    test: [
      {
        text: 'Application Configuration management weakness',
      },
      {
        text: 'File extensions handling – sensitive information',
      },
      {
        text: 'Old, Backup and Unreferenced Files – Sensitive Information',
      },
      {
        text: 'Unauthorized Admin Interfaces access',
      },
      {
        text: 'HTTP Methods enabled, XST permitted, HTTP Verb',
      },
      {
        text: 'Http strict transport security',
      },
      {
        text: 'RIA cross domain policy',
      },
      {
        text: 'Role definitions enumeration',
      },
      {
        text: 'Vulnerable user registration process',
      },
      {
        text: 'Vulnerable account provisioning process',
      },
      {
        text: 'Permissions of Guest/Low Permission Accounts',
      },
      {
        text: 'Account suspension/resumption process',
      },
    ],
  },
  {
    category: 'Authentication Testing',
    test: [
      {
        text: 'Credentials Transported over Unencrypted Channel',
      },
      {
        text: 'User enumeration',
      },
      {
        text: 'Account lockout',
      },
      {
        text: 'Authentication bypass',
      },
      {
        text: '“Remember password” functionality',
      },
      {
        text: 'Browser caching',
      },
      {
        text: 'Weak password policy',
      },
      {
        text: 'Weak password security mechanisms',
      },
      {
        text: 'Weak password change or reset flow',
      },
      {
        text: 'Race conditions',
      },
      {
        text: 'Weak multiple factors authentication',
      },
      {
        text: 'Weak CAPTCHA implementation',
      },
      {
        text: 'Weaker authentication in alternative channel',
      },
    ],
  },
  {
    category: 'Authorization Testing',
    test: [
      {
        text: 'Directory traversal/file inclusion',
      },
      {
        text: 'Authorization schema bypass',
      },
      {
        text: 'Privilege escalation',
      },
      {
        text: 'Insecure direct object references',
      },
    ],
  },
  {
    category: 'Session Management Testing',
    test: [
      {
        text: 'Cookies are set without ‘HTTP Only’, ‘Secure’, and no time validity',
      },
      {
        text: 'Session fixation',
      },
      {
        text: 'Exposed session variables',
      },
      {
        text: 'Cross site request forgery (CSRF)',
      },
      {
        text: 'Logout management',
      },
      {
        text: 'Session timeout',
      },
      {
        text: 'Session puzzling',
      },
    ],
  },
  {
    category: 'Data Validation Testing',
    test: [
      {
        text: 'Reflected cross site scripting',
      },
      {
        text: 'Stored cross site scripting',
      },
      {
        text: 'HTTP verb tampering',
      },
      {
        text: 'HTTP Parameter pollution / manipulation',
      },
      {
        text: 'SQL injection',
      },
      {
        text: 'LDAP injection',
      },
      {
        text: 'ORM injection',
      },
      {
        text: 'XML injection',
      },
      {
        text: 'SSI injection',
      },
      {
        text: 'Xpath Injection',
      },
      {
        text: 'Code injection',
      },
      {
        text: 'Local/remote file inclusion',
      },
      {
        text: 'Command injection',
      },
      {
        text: 'Buffer overflow',
      },
      {
        text: 'Heap overflow',
      },
      {
        text: 'Stack overflow',
      },
      {
        text: 'Format string manipulation',
      },
      {
        text: 'Incubated vulnerabilities',
      },
      {
        text: 'HTTP splitting/smuggling',
      },
    ],
  },
  {
    category: 'Error Handling',
    test: [
      {
        text: 'Analysis of Error Codes',
      },
      {
        text: 'Analysis of Stack Traces',
      },
    ],
  },
  {
    category: 'Cryptography',
    test: [
      {
        text: 'Weak SSL/TLS ciphers, insufficient transport layer protection',
      },
      {
        text: 'Padding oracle',
      },
      {
        text: 'Sensitive information sent via unencrypted channels',
      },
    ],
  },
  {
    category: 'Business Logic Testing',
    test: [
      {
        text: 'Business logic data validation',
      },
      {
        text: 'Ability to Forge Requests',
      },
      {
        text: 'Integrity checks',
      },
      {
        text: 'Process timing',
      },
      {
        text: 'Replay attack',
      },
      {
        text: 'Circumvention of Work Flows',
      },
      {
        text: 'Abuse of Functionality',
      },
      {
        text: 'File upload vulnerabilities',
      },
    ],
  },
  {
    category: 'Client Side Testing',
    test: [
      {
        text: 'DOM based Cross Site Scripting',
      },
      {
        text: 'Javascript Execution',
      },
      {
        text: 'Html/css injection',
      },
      {
        text: 'Client side url redirect',
      },
      {
        text: 'Client side resource manipulation',
      },
      {
        text: 'Cross origin resource sharing',
      },
      {
        text: 'Cross site flashing',
      },
      {
        text: 'Clickjacking / UI rendering',
      },
      {
        text: 'Web sockets',
      },
      {
        text: 'Web messaging',
      },
      {
        text: 'Local storage / session storage sensitive information',
      },
    ],
  },
  {
    category: 'AJAX Testing',
    test: [
      {
        text: 'AJAX weakness',
      },
    ],
  },
  {
    category: 'Denial of Service Testing',
    test: [
      {
        text: 'SQL Wildcard vulnerability',
      },
      {
        text: 'Locking customer accounts',
      },
      {
        text: 'Buffer overflows',
      },
      {
        text: 'User specified object allocation',
      },
      {
        text: 'User Input as a Loop Counter',
      },
      {
        text: 'Writing User Provided Data to Disk',
      },
      {
        text: 'Failure to Release Resources',
      },
      {
        text: 'Storing too Much Data in Session',
      },
    ],
  },
  {
    category: 'Web Services Testing',
    test: [
      {
        text: 'WS information gathering',
      },
      {
        text: 'WSDL weakness',
      },
      {
        text: 'Weak xml structure',
      },
      {
        text: 'XML content-level',
      },
      {
        text: 'WS HTTP GET parameters/REST',
      },
      {
        text: 'WS Naughty SOAP attachments',
      },
      {
        text: 'WS replay testing',
      },
    ],
  },
]
