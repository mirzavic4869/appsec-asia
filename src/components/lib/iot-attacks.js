export const iotAttacksData = [
  {
    category: 'Firmware Extracting & Reversing',
    test: [
      {
        text: 'Extracting',
      },
      {
        text: 'Reversing',
      },
      {
        text: 'Dumping',
      },
      {
        text: 'Downgrading',
      },
      {
        text: 'Bypass verification',
      },
      {
        text: 'Malicious update',
      },
      {
        text: 'Reset to insecure state',
      },
    ],
  },
  {
    category: 'Device App Vulnerabilities',
    test: [
      {
        text: 'Overflows',
      },
      {
        text: 'Vulnerable services (web, ssh, tftp, etc.)',
      },
      {
        text: 'Privilege escalation',
      },
    ],
  },
  {
    category: 'Local Data Storage',
    test: [
      {
        text: 'Tampering of storage',
      },
      {
        text: 'Sensitive information disclosure',
      },
      {
        text: 'PII (Personally identifiable information)',
      },
      {
        text: 'PHI (Protected health information)',
      },
      {
        text: 'Removal of storage media',
      },
      {
        text: 'Extract usernames, passwords, URLs',
      },
      {
        text: 'Encryption keys (symmetric, Asymmetric)',
      },
      {
        text: 'Sensitive information in logs',
      },
      {
        text: 'GEO location information',
      },
      {
        text: 'Device ID/Serial number exposure',
      },
      {
        text: 'Hardcoded credentials',
      },
      {
        text: 'Inability to wipe device',
      },
    ],
  },
  {
    category: 'Exposed Debugging Interfaces',
    test: [
      {
        text: 'UART',
      },
      {
        text: 'JTAG',
      },
      {
        text: 'SPI',
      },
      {
        text: 'USB',
      },
      {
        text: 'I2C',
      },
    ],
  },
  {
    category: 'Device Authentication and Identification',
    test: [
      {
        text: 'Device spoofing',
      },
      {
        text: 'Identity tampering',
      },
      {
        text: 'Pairing attacks',
      },
      {
        text: 'Session hijacking',
      },
      {
        text: 'Brute force',
      },
      {
        text: 'Device impersonation',
      },
      {
        text: 'Weak identifier',
      },
      {
        text: 'Insecure crypto',
      },
      {
        text: 'Backdoor accounts',
      },
      {
        text: 'Default credentials',
      },
    ],
  },
  {
    category: 'Side Channel Attacks',
    test: [
      {
        text: 'Power consuming attack',
      },
      {
        text: 'Time based attack',
      },
    ],
  },
  {
    category: 'Denial of Service',
    test: [
      {
        text: 'Battery abuse',
      },
      {
        text: 'Disable the device',
      },
      {
        text: 'Brick the device',
      },
    ],
  },
  {
    category: 'Network Traffic',
    test: [
      {
        text: 'Sniffing',
      },
      {
        text: 'MITM attacks',
      },
      {
        text: 'Message integrity',
      },
      {
        text: 'Replay attacks',
      },
      {
        text: 'Insecure usage of protocols (e.g. MQTT, XMPP)',
      },
      {
        text: 'Identity / Event / Data spoofing',
      },
      {
        text: 'Privilege escalation',
      },
    ],
  },
]
