const m4Topics = [
  'Transport Service Primitives', 'UDP vs TCP', 'Connection Management (Three-Way Handshake)',
  'TCP Timers', 'DNS: Name Space, Resource Record, Types of Name Server', 'HTTP, SMTP', 'Telnet, FTP'
];
const m4Concepts = [
  'Transport service primitives','TCP vs UDP','Application-based protocol selection',
  'TCP and UDP header diagrams','Three-way handshake','Sequence and acknowledgement numbers',
  'TCP timers','RTT and RTO basics','DNS hierarchy and resource records','DNS resolution',
  'HTTP','SMTP','Telnet','FTP','Protocol port numbers'
];
const m4Rows = [
 [1,'4.1','Transport Layer and its Responsibilities','Gate Smashers','kAty4mKczEg','16:11'],
 [2,'4.1','Transport Service Primitives','Sundeep Saradhi Kanthety','lTW0rTfm1Gg','07:19',34576,35015],
 [3,'4.2','TCP and TCP Header — Part 1','Gate Smashers','c8aet11HNxg','14:51'],
 [4,'4.2','TCP and TCP Header — Part 2','Gate Smashers','hsNuqtfxgRI','12:31'],
 [5,'4.2','UDP and UDP Header','Gate Smashers','HF_znV8x9a0','11:48'],
 [6,'4.2','TCP vs UDP','Gate Smashers','jJyXpMmXJI0','11:58'],
 [7,'4.3','TCP Connection Establishment and Termination','Gate Smashers','qIEHUUt2Wfc','15:12'],
 [8,'4.4','Timers in TCP Protocol','Engineering Funda','o_uVzGiu2UI','11:24'],
 [9,'4.5','DNS Working, Hierarchy and Resolution','Engineering Funda','K8fn6ZQtCvk','20:22'],
 [10,'4.5','DNS and Types of Name Servers','Gate Smashers','BZISxpdl4lQ','06:52'],
 [11,'4.5','DNS Resource Records','Sundeep Saradhi Kanthety','lTW0rTfm1Gg','06:04',42712,43076],
 [12,'4.6','HTTP and HTTPS','Engineering Funda','r4VY6K3jo5s','13:52'],
 [13,'4.6','Persistent vs Non-Persistent HTTP','Gate Smashers','zRUdSu3JlK8','07:51'],
 [14,'4.6','SMTP vs POP3 vs IMAP','Gate Smashers','cjPVlxmf_Vk','10:03'],
 [15,'4.7','Telnet Protocol and Network Virtual Terminal','CodeWithDeb','LAZN4rq-5mI',null],
 [16,'4.7','FTP, SFTP and TFTP','Engineering Funda','CrObzHJtANw','11:13']
].map(([n,sy,title,educator,id,time,startSeconds=null,endSeconds=null])=>({
  n,sy,title,videoTitle:title,educator,id,time,uid:'m4-l'+String(n).padStart(2,'0'),topicIds:[sy],startSeconds,endSeconds
}));
const m4Sections = [
 ['Transport Layer Fundamentals',1,2],['TCP and UDP',3,6],['Connection Management and Timers',7,8],
 ['Domain Name System',9,11],['HTTP and SMTP',12,14],['Telnet and FTP',15,16]
].map(([name,start,end])=>({name,rows:m4Rows.slice(start-1,end)}));
