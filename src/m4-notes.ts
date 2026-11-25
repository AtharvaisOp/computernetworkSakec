const m4Notes:Record<string,TopicNote> = {
  '4.1': {
    summary: 'IP delivers to hosts; transport delivers to application processes. Ports identify service and client endpoints. In the textbook connection-oriented model, LISTEN waits for an incoming connection, CONNECT requests one, SEND transmits application data, RECEIVE waits for or reads data, and DISCONNECT closes the connection.',
    formula: 'TCP connection ID = (source IP, source port, destination IP, destination port). Port numbers are 16-bit: 0–65535.',
    diagram: 'Server: LISTEN ← CONNECT :Client → SEND → RECEIVE → DISCONNECT.',
    question: 'Two uploads from the same laptop go to the same destination IP and TCP port 443. What lets the server keep them separate?',
    answer: 'The connections use different client source ports, so their connection IDs differ even though both IP addresses and the destination port match.'
  },
  '4.2': {
    summary: 'TCP is a connection-oriented, reliable, ordered byte stream. It uses sequence numbers, ACKs, retransmissions, flow control and congestion control. UDP sends independent datagrams without a handshake or built-in delivery or ordering guarantees. Use TCP for an intact document and consider UDP for latency-sensitive audio that can tolerate loss.',
    formula: 'TCP header length = Data Offset × 4 bytes (minimum 20). UDP header is 8 bytes, so UDP payload = UDP Length − 8 bytes.',
    diagram: 'TCP: [Src/Dst ports] [Seq] [ACK] [Offset/Flags/Window] [Checksum/Urgent] [Options?] [Data]. UDP: [Src/Dst ports] [Length/Checksum] [Data].',
    question: 'A UDP header says Length = 60 bytes. How large is the payload, and does UDP guarantee it will arrive?',
    answer: '52 bytes. UDP preserves datagram boundaries but does not guarantee delivery or order; the application must provide any reliability it needs.'
  },
  '4.3': {
    summary: 'The three-way TCP handshake synchronizes each side’s initial sequence number and confirms both directions. A FIN closes only one direction; the peer can still send until it issues its own FIN, and the two FINs are acknowledged separately even when some flags share a segment.',
    formula: 'ACK is the next byte expected. SYN and FIN each consume one sequence number; a pure ACK does not.',
    diagram: 'Client → Server: SYN, seq=x. Server → Client: SYN+ACK, seq=y, ack=x+1. Client → Server: ACK, seq=x+1, ack=y+1.',
    question: 'A client begins at sequence 620 and the server answers with SYN+ACK at sequence 9100. What sequence and acknowledgement numbers does the final pure ACK carry?',
    answer: 'Sequence 621, ACK 9101. The client’s SYN consumed sequence 620 and the server’s SYN consumed sequence 9100.'
  },
  '4.4': {
    summary: 'Retransmission timer: resend the oldest outstanding data if no ACK arrives before its timeout. Persistence timer: probe a zero receive window so a lost window update cannot stall the sender indefinitely. Keepalive timer: optionally probe an idle peer to detect a stale connection. TIME-WAIT timer: wait 2×MSL after the final ACK in the usual active-close case, allowing that ACK to be resent and delayed duplicates to expire.',
    formula: 'RTT is round-trip time. RTO = SRTT + max(clock granularity, 4×RTTVAR), before the applicable minimum. Back off after timeout.',
    diagram: 'Unacknowledged data → retransmit; zero window → probe window; idle peer → keepalive; final ACK sent → TIME-WAIT.',
    question: 'A receiver reopens a zero window, but its window-update ACK is lost. Which timer prevents a deadlock?',
    answer: 'The persistence timer. A zero-window probe causes the peer to ACK with its current advertised window, revealing that it reopened.'
  },
  '4.5': {
    summary: 'DNS is a hierarchical namespace. The recursive resolver returns the answer to the client or uses cached data; on a miss it can follow iterative referrals from root to TLD to the domain’s authoritative server. Primary and secondary servers can both answer authoritatively for their zone.',
    formula: 'Record types: A → IPv4; AAAA → IPv6; CNAME → canonical hostname; MX → mail exchanger with preference; NS → name server; PTR → reverse lookup name. TTL is the cache lifetime in seconds. Conventional DNS uses port 53 (UDP or TCP).',
    diagram: 'Client → recursive resolver → root (referral) → TLD (referral) → authoritative server (answer).',
    question: 'A college serves a portal over IPv4 and IPv6 and wants an alias to follow any address changes automatically. Which records should it use?',
    answer: 'Publish A and AAAA at the canonical portal hostname. Point the alias at that hostname with a CNAME.'
  },
  '4.6': {
    summary: 'HTTP sends a request and returns a response. GET retrieves; POST submits for processing; PUT creates or replaces the target; DELETE requests removal. Common statuses: 200 OK, 201 Created, 304 Not Modified, 404 Not Found, 500 Server Error. Persistent HTTP reuses a connection; non-persistent HTTP opens a new connection per request. SMTP sends or relays email; POP3 retrieves mail and IMAP keeps mailbox state in sync.',
    formula: 'Common ports: HTTP 80; HTTPS 443; SMTP relay 25 and client submission 587; POP3 110/995 and IMAP 143/993 (traditional/implicit TLS). For serial non-persistent HTTP over TCP, ≈2 RTTs per object if DNS, TLS and transfer time are excluded.',
    diagram: 'Browser → HTTP request → server → response. Sender → SMTP submission/relay → recipient mailbox ← IMAP or POP3 client.',
    question: 'A page needs one HTML page and three images, fetched serially over non-persistent HTTP. Assuming 25 ms RTT, what is the overhead before transfer time, DNS and TLS?',
    answer: '4 objects × 2 RTTs × 25 ms = 200 ms. Each object needs a new TCP connection plus its HTTP request and response.'
  },
  '4.7': {
    summary: 'Telnet provides remote terminal access via Network Virtual Terminal, a common representation between different systems. Telnet and plain FTP do not encrypt credentials or traffic. FTP uses a persistent control channel and separate data connections for listings and transfers. In active FTP the server initiates the data connection to the client; in passive FTP the client initiates it to the endpoint announced by the server.',
    formula: 'Telnet: TCP 23. FTP control: TCP 21; FTP active data commonly originates from server TCP 20; passive data uses a server-chosen port. SSH and SFTP typically use TCP 22.',
    diagram: 'FTP control: client → server:21. Active data: server:20 → client data port. Passive data: client → server passive port.',
    question: 'An FTP client behind NAT can log in but directory listings stall in active mode. What should it try, and why?',
    answer: 'Use passive FTP so the client opens the data connection outbound instead of waiting for the inbound server connection. If encryption is needed, use an encrypted alternative such as SFTP on a server that supports it.'
  }
};
