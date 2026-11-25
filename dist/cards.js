"use strict";
const quizCards = [
    {
        "id": "m3-01",
        "topic": "3.1",
        "question": "A campus router has a route to every building. A fibre cut changes the best path to the library. Which two operations must take place before the next packet uses the new path?",
        "choices": [
            "Recompute the route, install the forwarding entry, then look up the packet destination.",
            "Look up the packet destination first and run the routing algorithm separately for each packet.",
            "Replace the destination IP with the library router’s MAC throughout the campus."
        ],
        "explanation": "Routing updates reachability and the chosen next hop. Forwarding applies the installed entry to each arriving packet.",
        "ref": "p. 5"
    },
    {
        "id": "m3-02",
        "topic": "3.1",
        "question": "A sensor sends one reading per day. The network should carry its first packet immediately without installing per-sensor path state in intermediate routers. Which service fits?",
        "choices": [
            "A datagram service with a destination address on each packet.",
            "A virtual circuit established with a setup message before the reading.",
            "A virtual circuit whose path identifier is allocated after the reading arrives."
        ],
        "explanation": "Datagram routers can use ordinary destination-based forwarding immediately. A virtual circuit needs an established path and corresponding state.",
        "ref": "p. 6"
    },
    {
        "id": "m3-03",
        "topic": "3.1",
        "question": "A 1,500-byte IPv4 packet reaches an outgoing link with MTU 1,280. The Don't Fragment flag is clear. Which router behaviour can deliver the packet across that link?",
        "choices": [
            "Split the IPv4 packet into fragments that fit the outgoing MTU.",
            "Cut the payload into separate Ethernet frames and leave the IP fragmentation fields untouched.",
            "Reduce the TTL until the original 1,500-byte packet fits the link."
        ],
        "explanation": "IPv4 fragmentation gives each fragment the information the destination needs for reassembly. Changing TTL has no effect on packet length.",
        "ref": "p. 7"
    },
    {
        "id": "m3-04",
        "topic": "3.2",
        "question": "A reservation service sends a booking confirmation containing a customer's reference to exactly one phone. Which destination does the IP packet need?",
        "choices": [
            "The phone’s unicast address, assuming it is directly reachable.",
            "The group address for phones subscribed to booking alerts.",
            "The directed broadcast address of the phone’s subnet."
        ],
        "explanation": "The intended recipient is one endpoint. Group membership and subnet membership both select audiences larger than the individual customer.",
        "ref": "p. 8"
    },
    {
        "id": "m3-05",
        "topic": "3.2",
        "question": "One sender streams 3 Mb/s to 12 subscribers behind a single WAN link. The path supports multicast and branches only after that link. How much WAN capacity does multicast save compared with separate unicasts, ignoring headers?",
        "choices": [
            "33 Mb/s",
            "3 Mb/s",
            "36 Mb/s"
        ],
        "explanation": "Unicast sends 12 × 3 = 36 Mb/s across the shared link. Multicast sends one 3 Mb/s copy there, saving 33 Mb/s.",
        "ref": "p. 9"
    },
    {
        "id": "m3-06",
        "topic": "3.2",
        "question": "Three receivers on a LAN join 239.1.1.1. A sender on another LAN has a multicast-capable route to them. Which IP address pair belongs on its outgoing stream?",
        "choices": [
            "Source = sender’s unicast IP; destination = 239.1.1.1.",
            "Source = 239.1.1.1; destination = first receiver’s unicast IP.",
            "Source = sender’s unicast IP; destination = remote LAN’s broadcast address."
        ],
        "explanation": "The group address represents the selected receivers. The source identifies the individual sender, and multicast forwarding replicates packets where paths branch.",
        "ref": "p. 8"
    },
    {
        "id": "m3-07",
        "topic": "3.3",
        "question": "A legacy inventory report omits masks and explicitly assumes classful IPv4. It lists 150.23.9.40. Which network should the report assign it to?",
        "choices": [
            "150.23.0.0/16",
            "150.0.0.0/8",
            "150.23.9.0/24"
        ],
        "explanation": "The first octet 150 lies in the historical Class B range of 128–191. Under the stated assumption the first two octets identify the network.",
        "ref": "p. 10"
    },
    {
        "id": "m3-08",
        "topic": "3.3",
        "question": "A lab needs an RFC 1918 private block and is comparing three proposed addresses. Which one lies inside the private 172 range?",
        "choices": [
            "172.30.12.9",
            "172.32.12.9",
            "172.15.12.9"
        ],
        "explanation": "The private block 172.16.0.0/12 covers second octets 16–31 inclusive. Being in historical Class B alone does not imply a private address.",
        "ref": "p. 11"
    },
    {
        "id": "m3-09",
        "topic": "3.3",
        "question": "A legacy Ethernet LAN uses 192.168.12.0 with its classful mask. An otherwise correctly configured printer is assigned 192.168.12.255. What should the technician change?",
        "choices": [
            "Assign an unused address between 192.168.12.1 and 192.168.12.254.",
            "Keep .255 and set the gateway to .0.",
            "Keep .255 and register the printer as a multicast listener."
        ],
        "explanation": "With a /24 mask, .255 has all host bits set and is the directed broadcast. Ordinary interfaces need unique usable host addresses.",
        "ref": "p. 12"
    },
    {
        "id": "m3-10",
        "topic": "3.4",
        "question": "A device reports 10.8.7.173/27. Its gateway must be inside the same subnet. Which candidate can be used if it is free?",
        "choices": [
            "10.8.7.190",
            "10.8.7.191",
            "10.8.7.159"
        ],
        "explanation": "The /27 block is .160–.191. Its usable addresses are .161–.190, so .191 is the broadcast and .159 is outside.",
        "ref": "p. 14"
    },
    {
        "id": "m3-11",
        "topic": "3.4",
        "question": "A route advertisement covers 172.20.78.18/20 after host bits are cleared. Which range of third octets should remote sites expect?",
        "choices": [
            "64 through 79",
            "72 through 87",
            "78 through 93"
        ],
        "explanation": "A /20 uses mask 255.255.240.0. The third-octet block size is 16, and 78 lies in the aligned range 64–79.",
        "ref": "p. 14"
    },
    {
        "id": "m3-12",
        "topic": "3.4",
        "question": "An architect has 10.0.0.0/18 and plans to carve out equal /22 site blocks. How many whole sites can be allocated?",
        "choices": [
            "16",
            "4",
            "64"
        ],
        "explanation": "The site prefix adds four bits. Those four bits select 2⁴ = 16 distinct /22 blocks within the /18.",
        "ref": "p. 13"
    },
    {
        "id": "m3-13",
        "topic": "3.4",
        "question": "A configuration tool accepts prefixes only when the supplied base is the network address. Which input correctly represents the /26 LAN containing 192.0.2.130?",
        "choices": [
            "192.0.2.128/26",
            "192.0.2.130/26",
            "192.0.2.126/26"
        ],
        "explanation": "A /26 advances in blocks of 64. The range containing .130 begins at .128, where all six host bits are zero.",
        "ref": "p. 15"
    },
    {
        "id": "m3-14",
        "topic": "3.5",
        "question": "A /24 must be split into eight equal lab LANs. With ordinary network and broadcast reservations, what does each lab receive?",
        "choices": [
            "A /27 with 30 usable addresses.",
            "A /28 with 14 usable addresses.",
            "A /26 with 62 usable addresses."
        ],
        "explanation": "Eight equal subnets require three extra prefix bits. A /27 leaves five host bits, giving 32 addresses and 30 usable.",
        "ref": "p. 17"
    },
    {
        "id": "m3-15",
        "topic": "3.5",
        "question": "A department has 30 computers plus one router interface. What is the smallest ordinary IPv4 subnet that can contain all 31 interfaces?",
        "choices": [
            "/26",
            "/27",
            "/28"
        ],
        "explanation": "Count the gateway among the interfaces. A /27 offers only 30 usable addresses, while a /26 offers 62.",
        "ref": "p. 20"
    },
    {
        "id": "m3-16",
        "topic": "3.5",
        "question": "A /24 must serve three departments with 100, 45 and 12 interfaces respectively, including gateways. Which largest-first allocation meets demand without overlap?",
        "choices": [
            ".0/25, .128/26, .192/28",
            ".0/25, .64/26, .192/28",
            ".0/26, .64/26, .128/28"
        ],
        "explanation": "The departments need 126, 62 and 14 usable slots from their respective prefixes. The correct blocks span .0–.127, .128–.191 and .192–.207.",
        "ref": "p. 18"
    },
    {
        "id": "m3-17",
        "topic": "3.5",
        "question": "A site already uses 10.1.0.0/25 and 10.1.0.128/27. Which is the lowest available aligned block for another LAN needing 22 usable addresses?",
        "choices": [
            "10.1.0.160/27",
            "10.1.0.144/27",
            "10.1.0.160/28"
        ],
        "explanation": "A /27 provides 30 usable addresses and begins on a multiple of 32. The existing allocations finish at .159, making .160 the first free boundary.",
        "ref": "p. 18"
    },
    {
        "id": "m3-18",
        "topic": "3.5",
        "question": "One edge router serves all four networks 10.72.12.0/24 through 10.72.15.0/24. What single prefix advertises exactly these networks?",
        "choices": [
            "10.72.12.0/22",
            "10.72.12.0/23",
            "10.72.8.0/21"
        ],
        "explanation": "Four adjacent /24s make a /22 if the first third octet is a multiple of four. The /22 starts at 12 and ends at 15.",
        "ref": "p. 19"
    },
    {
        "id": "m3-19",
        "topic": "3.5",
        "question": "A branch owns 192.168.5.0/24 and 192.168.6.0/24 only. It may advertise no addresses belonging to others. What should it announce?",
        "choices": [
            "Keep the two /24 announcements.",
            "Advertise 192.168.4.0/22.",
            "Advertise 192.168.4.0/23."
        ],
        "explanation": "The adjacent networks straddle an aligned /23 boundary. A /22 would cover .4 and .7 as well, and the proposed /23 omits .6.",
        "ref": "p. 19"
    },
    {
        "id": "m3-20",
        "topic": "3.5",
        "question": "Host 192.168.8.61/27 sends to 192.168.8.65. Both hosts have correct gateways and empty ARP caches. Whose MAC should the sender first resolve?",
        "choices": [
            "Its own subnet’s default gateway.",
            "The destination host at .65.",
            "The broadcast address of the destination subnet."
        ],
        "explanation": "The sender belongs to .32/27 and .65 belongs to .64/27. A remote IP needs the local router as the first Ethernet hop.",
        "ref": "p. 21"
    },
    {
        "id": "m3-21",
        "topic": "3.6",
        "question": "Two workstations use TCP source port 51000 to contact the same remote server through one public IPv4 address. What prevents return traffic from being mixed up?",
        "choices": [
            "PAT gives the concurrent flows distinct external source ports.",
            "The router assigns both flows the same external port and identifies replies by remote IP alone.",
            "The router sends the first reply to both machines and waits for an acknowledgement."
        ],
        "explanation": "Identical external address and port combinations would collide for the same remote endpoint. PAT maintains distinct translations so replies map back to the right client.",
        "ref": "p. 23"
    },
    {
        "id": "m3-22",
        "topic": "3.6",
        "question": "A gateway records 10.2.0.8:42000 ↔ 198.51.100.9:61002 for a TCP connection to 203.0.113.7:443. A reply arrives at the public port. Which field is rewritten on the inside-bound packet?",
        "choices": [
            "Destination becomes 10.2.0.8:42000.",
            "Source becomes 10.2.0.8:42000.",
            "Destination becomes 203.0.113.7:443."
        ],
        "explanation": "A returning packet already has the server as its source. The gateway looks up the public destination tuple and restores the private destination.",
        "ref": "p. 24"
    },
    {
        "id": "m3-23",
        "topic": "3.6",
        "question": "A college wants a public HTTPS endpoint on an internal server, using a single public IPv4 address. There is no existing outbound flow. Which mapping should the administrator configure?",
        "choices": [
            "Forward public TCP port 443 to the internal server’s TCP port 443.",
            "Wait for outbound PAT to discover the internal HTTPS listener.",
            "Forward each new public connection to whichever host most recently visited an HTTPS site."
        ],
        "explanation": "An unsolicited inbound connection has no dynamic mapping to identify an internal listener. A fixed port-forward supplies that destination.",
        "ref": "p. 23"
    },
    {
        "id": "m3-24",
        "topic": "3.7",
        "question": "A router inventory contains 2001:0db8:0000:0000:0040:0000:0000:0001. Which is its canonical compressed form when equal-length zero runs are resolved leftmost first?",
        "choices": [
            "2001:db8::40:0:0:1",
            "2001:db8:0:0:40::1",
            "2001:db8::40::1"
        ],
        "explanation": "Remove leading zeros from each group, then replace the leftmost longest run once. The second choice is equivalent in value but fails the stated canonical tie rule.",
        "ref": "p. 25"
    },
    {
        "id": "m3-25",
        "topic": "3.7",
        "question": "An engineer ports an IPv4 address-discovery tool to an IPv6 LAN. Which design lets it discover a neighbour’s link-layer address without an IPv4-style broadcast?",
        "choices": [
            "Send a Neighbor Solicitation to the target’s solicited-node multicast group.",
            "Broadcast an ARP query to every IPv6 address in the subnet.",
            "Send an IGMP membership report naming the neighbour as the group."
        ],
        "explanation": "IPv6 Neighbor Discovery uses ICMPv6 messages and solicited-node multicast for address resolution. This narrows the group of listeners.",
        "ref": "p. 26"
    },
    {
        "id": "m3-26",
        "topic": "3.7",
        "question": "An IPv6 router cannot forward a 1,400-byte packet over a 1,280-byte link. Which response should the sender be designed to handle?",
        "choices": [
            "An ICMPv6 Packet Too Big message so the source can reduce packet size.",
            "Fragments generated by the intermediate IPv6 router and reassembled at the next hop.",
            "A request to toggle an IPv6 header checksum field before retrying."
        ],
        "explanation": "IPv6 routers do not fragment in transit. Packet Too Big feedback supports path MTU discovery, leaving packet sizing or source fragmentation to the sender.",
        "ref": "p. 26"
    },
    {
        "id": "m3-27",
        "topic": "3.7",
        "question": "A monitoring tool needs to detect IPv6 packets expiring in a forwarding loop. Which IPv6 base-header field should it inspect?",
        "choices": [
            "Hop Limit",
            "Flow Label",
            "Payload Length"
        ],
        "explanation": "Each forwarding router decrements Hop Limit. Flow Label groups related traffic, and Payload Length describes the amount of data after the base header.",
        "ref": "p. 26"
    },
    {
        "id": "m3-28",
        "topic": "3.8",
        "question": "A network has undirected links A–B 6, A–C 2, C–B 1, B–D 2 and C–D 8. What should A install for D using shortest-path cost?",
        "choices": [
            "Next hop C, cost 5.",
            "Next hop B, cost 8.",
            "Next hop C, cost 10."
        ],
        "explanation": "The path A–C–B–D costs 2 + 1 + 2 = 5. The direct-looking alternatives cost 8 and 10, so the first hop is C.",
        "ref": "p. 29"
    },
    {
        "id": "m3-29",
        "topic": "3.8",
        "question": "In a Dijkstra run from S, permanent nodes are S and A. Tentative costs are B=7, C=4 and D=9. Edge C–B costs 2. What happens in the next iteration?",
        "choices": [
            "Settle C and lower B to 6 via C.",
            "Settle B and lower C to 2 via B.",
            "Settle D because it presently has the largest estimate."
        ],
        "explanation": "Choose the smallest unsettled distance, 4. Relaxing C–B produces 4 + 2 = 6, which improves B's previous estimate of 7.",
        "ref": "p. 28"
    },
    {
        "id": "m3-30",
        "topic": "3.8",
        "question": "A router sees equally cheap paths S–A–D and S–B–D, each cost 5. A forwarding implementation supports equal-cost multipath. Which outcome preserves the SPF result?",
        "choices": [
            "Install A and B as eligible next hops to D.",
            "Add both costs and advertise D at cost 10.",
            "Discard both paths until one metric becomes strictly lower."
        ],
        "explanation": "Either path reaches D with the same minimum cost. ECMP can retain both next hops while the destination metric stays 5.",
        "ref": "p. 30"
    },
    {
        "id": "m3-31",
        "topic": "3.8",
        "question": "S reaches D through A at cost 2 + 2. An alternate route through B costs 1 + 5. Link A–D fails. Once all routers have the new topology, what should S install?",
        "choices": [
            "Via B at cost 6.",
            "Via A at cost 4 until a packet for D is lost.",
            "Via B at cost 5."
        ],
        "explanation": "Remove the failed edge and recompute using the remaining links. The cost of the entire surviving path is 1 + 5, including the first hop.",
        "ref": "p. 30"
    },
    {
        "id": "m3-32",
        "topic": "3.9",
        "question": "Two adjacent OSPF routers remain connected, but their measured link cost changes. What information needs to spread through their area?",
        "choices": [
            "Updated link-state advertisements describing local adjacency costs.",
            "Only a final next-hop table from one router sent to the other.",
            "Every user packet that observed the old cost."
        ],
        "explanation": "Link-state routers distribute descriptions of their local links. Each router uses its topology database to recompute shortest paths.",
        "ref": "p. 32"
    },
    {
        "id": "m3-33",
        "topic": "3.9",
        "question": "A router already holds sequence 84 of a link-state advertisement. An old copy with sequence 81 arrives for the same originator during normal operation. What should it do?",
        "choices": [
            "Keep sequence 84 and ignore the stale update.",
            "Accept sequence 81 because it arrived later.",
            "Average the two advertisements’ link metrics."
        ],
        "explanation": "Flooding can deliver duplicates and delayed copies. Sequence numbers distinguish the newer topology information from stale versions.",
        "ref": "p. 32"
    },
    {
        "id": "m3-34",
        "topic": "3.9",
        "question": "A growing campus wants each router to calculate routes from a common topology map, but wishes to limit flooding across a large domain. Which design fits?",
        "choices": [
            "Use OSPF areas and run shortest-path calculations within the area topology.",
            "Use per-host static routes throughout campus and periodically broadcast the entire host list.",
            "Use a single RIP domain because every RIP router builds an area-wide link-state database."
        ],
        "explanation": "OSPF is a link-state interior protocol with hierarchical areas. Its area structure scopes detailed topology flooding.",
        "ref": "p. 33"
    },
    {
        "id": "m3-35",
        "topic": "3.10",
        "question": "R can reach destination X through neighbours A or B. The link to A costs 2 and A reports 7 to X. The link to B costs 5 and B reports 3. What should R record?",
        "choices": [
            "Cost 8 via B.",
            "Cost 3 via B.",
            "Cost 7 via A."
        ],
        "explanation": "Compare the full candidate costs, 2 + 7 = 9 and 5 + 3 = 8. The advertised distance starts at the neighbour, so the first-hop cost must be added.",
        "ref": "p. 34"
    },
    {
        "id": "m3-36",
        "topic": "3.10",
        "question": "R currently reaches Y through N at total cost 4. Its link to N costs 1. N now reports distance 9; neighbour M reports 5 over a link costing 2. Which update is correct?",
        "choices": [
            "Switch to M at total cost 7.",
            "Keep N at total cost 4 because an installed metric can only decrease.",
            "Switch to N at total cost 9."
        ],
        "explanation": "Recompute both candidates from current advertisements. Via N now costs 10 while via M costs 7, so the old total is no longer valid.",
        "ref": "p. 35"
    },
    {
        "id": "m3-37",
        "topic": "3.10",
        "question": "A learns a route to a printer subnet from B. With poison reverse enabled, how should A describe that subnet in its update sent back to B?",
        "choices": [
            "Advertise it as unreachable to B.",
            "Advertise A’s finite route metric plus one to B.",
            "Advertise it as zero cost because B already knows the route."
        ],
        "explanation": "A depends on B for that destination. Advertising infinity back toward B prevents B from selecting A as its immediate fallback for the same route.",
        "ref": "p. 36"
    },
    {
        "id": "m3-38",
        "topic": "3.10",
        "question": "A disconnected subnet’s RIP metric rises at neighbouring routers from 3 to 4 to 5 after a link failure. Which diagnosis fits the trace?",
        "choices": [
            "Routers repeatedly believe each other’s stale reachability, approaching RIP infinity at 16.",
            "Each router is independently measuring a longer physical cable delay on the disconnected link.",
            "The metric is a packet’s TTL, increasing as the loop persists."
        ],
        "explanation": "Count-to-infinity is a routing-table convergence problem. Each step adds a hop to outdated information until the route is finally considered unreachable.",
        "ref": "p. 36"
    },
    {
        "id": "m3-39",
        "topic": "3.11",
        "question": "A host knows a same-subnet printer’s IPv4 address but has no MAC entry for it. Which message exchange is expected?",
        "choices": [
            "A local broadcast ARP request followed normally by the printer’s unicast reply.",
            "An ICMP Echo Request to the printer’s unknown Ethernet address followed by an IGMP report.",
            "A unicast ARP request sent to the remote authoritative DNS server."
        ],
        "explanation": "ARP discovers the local link-layer address for a known IPv4 address. The request reaches the LAN, and the matching host can reply directly to the requester.",
        "ref": "p. 38"
    },
    {
        "id": "m3-40",
        "topic": "3.11",
        "question": "A legacy diskless terminal knows its own Ethernet address but has no IPv4 address. A lab is reproducing the historical protocol that supplies only the corresponding IP. What server does it need?",
        "choices": [
            "A RARP server holding MAC-to-IP mappings.",
            "An ARP responder that maps destination IP to next-hop MAC.",
            "An IGMP querier that periodically checks membership."
        ],
        "explanation": "RARP operates in the reverse direction from ARP. It was used for bootstrapping before more capable configuration protocols became common.",
        "ref": "p. 38"
    },
    {
        "id": "m3-41",
        "topic": "3.11",
        "question": "A diagnostic tool sends probes with IPv4 TTL values 1, 2, 3 and so on. What makes successive routers visible when they respond?",
        "choices": [
            "Each router where a probe expires returns ICMP Time Exceeded.",
            "Each router adds its routing table to an ICMP Echo Reply sent by the next router.",
            "The source broadcasts an ARP request independently onto every remote link."
        ],
        "explanation": "A forwarding router decrements TTL. Increasing the initial TTL makes a different hop discard a probe and identify itself in the resulting ICMP response.",
        "ref": "p. 39"
    },
    {
        "id": "m3-42",
        "topic": "3.11",
        "question": "A student changes from a multicast lecture stream to another channel. Which protocol lets an IPv4 router learn the group membership of hosts on its local link?",
        "choices": [
            "IGMP",
            "ICMP Echo",
            "RARP"
        ],
        "explanation": "IGMP handles IPv4 group membership reports and queries between hosts and local multicast routers. Inter-router multicast routing is a separate task.",
        "ref": "p. 39"
    },
    {
        "id": "m3-43",
        "topic": "3.12",
        "question": "A 1 Gb/s client feeds a slow receiver over an otherwise idle network. In a second test many clients overload a shared router while receivers remain fast. What control belongs in the second test?",
        "choices": [
            "Congestion control targeting the overloaded network path.",
            "Receiver flow control based solely on one receiver’s free buffer.",
            "Address translation to increase the router’s physical link capacity."
        ],
        "explanation": "Flow control protects an individual receiver. The many-to-one bottleneck creates a network load problem even when each destination can consume data quickly.",
        "ref": "p. 42"
    },
    {
        "id": "m3-44",
        "topic": "3.12",
        "question": "A video service reserves capacity and refuses new sessions once the precomputed bandwidth budget is exhausted. Its decision uses no measurements of current queue buildup. What policy is this?",
        "choices": [
            "Open-loop congestion prevention by admission control.",
            "Closed-loop congestion recovery by explicit congestion notification.",
            "Distance-vector convergence using hold-down timers."
        ],
        "explanation": "The service prevents overload at admission time using a resource budget. Closed-loop control would react to feedback about congestion already developing.",
        "ref": "p. 43"
    },
    {
        "id": "m3-45",
        "topic": "3.12",
        "question": "A router marks packets when its queue fills. The receiver echoes the indication and the sender reduces its rate. Which description fits this system?",
        "choices": [
            "Closed-loop control using explicit congestion feedback.",
            "Open-loop control because marking happens inside the network.",
            "Flow control based on the receiver’s advertised memory."
        ],
        "explanation": "The queue is measured, the indication travels back to the sender, and transmission changes as a result. That feedback path closes the loop.",
        "ref": "p. 44"
    },
    {
        "id": "m3-46",
        "topic": "3.12",
        "question": "A lossy path is congested. A window protocol may resend every outstanding packet after one loss or resend just the missing packets. Which choice limits avoidable load?",
        "choices": [
            "Selectively retransmit the missing packets.",
            "Retransmit the full window every time to increase throughput.",
            "Shorten the timeout to zero so every dropped packet is immediately retried."
        ],
        "explanation": "Selective retransmission avoids sending data that arrived successfully. Extra retransmissions consume scarce bandwidth and can aggravate congestion.",
        "ref": "p. 43"
    },
    {
        "id": "m3-47",
        "topic": "3.5",
        "question": "A clinic has one /24. It needs LANs for 70, 35 and 18 addressed interfaces. Using the smallest ordinary subnet for each, how many total addresses remain unallocated?",
        "choices": [
            "32",
            "64",
            "129"
        ],
        "explanation": "The required blocks occupy 128 + 64 + 32 = 224 addresses. The /24 holds 256, leaving 32 addresses available for another aligned /27 under largest-first allocation.",
        "ref": "p. 49"
    },
    {
        "id": "m3-48",
        "topic": "3.6",
        "question": "A lab PC reaches its gateway and can reach campus servers. Outbound packets to an Internet server leave the edge with source 10.4.1.8. The campus owns one public IPv4 address. Which edge function is missing for ordinary Internet return routing?",
        "choices": [
            "Source translation, typically PAT using the public IPv4 address.",
            "Destination translation of all Internet server addresses to 10.4.1.8.",
            "Multicast registration of the PC’s private address with the ISP."
        ],
        "explanation": "RFC 1918 source addresses generally lack a public return route. PAT presents a reachable public source and keeps a mapping to deliver the replies.",
        "ref": "p. 48"
    },
    {
        "id": "m3-49",
        "topic": "3.9",
        "question": "A campus link fails. The network team wants to explain how traffic moves to the redundant link under link-state routing. Which event sequence is correct?",
        "choices": [
            "Detect adjacency change, flood updated local link information, recompute SPF, install a new next hop.",
            "Install a random next hop, wait for every host to refresh ARP, then run SPF only at the destination.",
            "Wait until each router has exchanged a complete distance vector with every other router."
        ],
        "explanation": "The failure changes the topology database through link-state flooding. Each router computes its own routes and updates its forwarding entries.",
        "ref": "p. 48"
    },
    {
        "id": "m3-50",
        "topic": "3.11",
        "question": "A video stream works for an existing LAN subscriber. A newly connected host requests the same IPv4 multicast stream; the router needs to learn that the new link has an interested receiver. What should be checked first?",
        "choices": [
            "Whether the host’s IGMP membership report reaches its local multicast router.",
            "Whether the sender changed its source IP to the group address.",
            "Whether the host received a separate unicast copy before it could join."
        ],
        "explanation": "A receiver joins a group locally through IGMP. Knowing that a downstream link has listeners lets the multicast forwarding system deliver group traffic on that link.",
        "ref": "p. 40"
    },
    {
        "id": "m4-01",
        "topic": "4.1",
        "question": "A grading service accepts one student, then stops admitting others while it writes that student's feedback. Which socket design lets new students connect during the write?",
        "choices": [
            "Keep accepting on the listening socket and handle each returned socket independently.",
            "Read all student submissions from the listening socket itself.",
            "Give every student a different server port before calling listen."
        ],
        "explanation": "accept returns a connected socket for one client. The original socket can keep accepting while a worker or event loop services the first connection.",
        "ref": "p. 5"
    },
    {
        "id": "m4-02",
        "topic": "4.1",
        "question": "A trace shows no outbound packet when an idle server calls the abstract RECEIVE primitive. Which observation would show that the design is working?",
        "choices": [
            "The call waits until incoming data can be returned to the application.",
            "The peer receives an empty DATA packet requesting its next message.",
            "The peer starts a fresh handshake for every waiting RECEIVE."
        ],
        "explanation": "A primitive is a local service request. RECEIVE waits for data, whereas SEND can cause transport data to travel on the network.",
        "ref": "p. 4"
    },
    {
        "id": "m4-03",
        "topic": "4.1",
        "question": "An internal time service must answer independent UDP requests from thousands of sensors on port 9000. Which server loop fits?",
        "choices": [
            "Bind a datagram socket, receive each request with its sender address, and send the reply there.",
            "Bind a stream socket and accept a TCP connection for each UDP request.",
            "Receive every request on an ephemeral socket, then move it to a listening socket on 9000."
        ],
        "explanation": "A bound UDP socket can serve multiple senders without connection setup. The sender's IP and source port identify the reply destination.",
        "ref": "p. 5"
    },
    {
        "id": "m4-04",
        "topic": "4.1",
        "question": "Two independent TCP uploads leave one laptop for the same server IP and port 443 at the same time. Which field can distinguish the connections when their IP addresses match?",
        "choices": [
            "The laptop's source port.",
            "The server's listening port alone.",
            "The sequence number of the first file byte alone."
        ],
        "explanation": "The TCP connection is identified by both endpoint IPs and ports. Distinct client ports give these simultaneous connections different four-tuples.",
        "ref": "p. 3"
    },
    {
        "id": "m4-05",
        "topic": "4.1",
        "question": "A client sends a variable-length input stream, then needs the server's computed result. The service uses end-of-stream to delimit the input. What should the client do?",
        "choices": [
            "Close its sending direction and continue reading.",
            "Abort the entire connection as soon as it finishes writing.",
            "Wait for the result before signalling the end of the input stream."
        ],
        "explanation": "A half-close tells the server that the request is complete while leaving the reverse direction available for the result. Waiting first could leave both sides waiting.",
        "ref": "p. 4"
    },
    {
        "id": "m4-06",
        "topic": "4.2",
        "question": "A lecture app has a live microphone channel and a downloadable answer sheet. Lost audio expires in 80 ms, while the PDF must arrive intact. Which split meets both goals?",
        "choices": [
            "Send timestamped live audio over UDP and transfer the PDF over reliable TCP.",
            "Use one ordered TCP stream for both so a lost audio frame is always replayed before newer audio.",
            "Send both over plain UDP and treat a valid checksum as proof that every piece arrived."
        ],
        "explanation": "Late audio can be discarded at playout, while the PDF needs recovery and ordering. A checksum can detect corruption in a received datagram but cannot recover a missing one.",
        "ref": "p. 10"
    },
    {
        "id": "m4-07",
        "topic": "4.2",
        "question": "A billing client sends two records using two TCP writes. The server's first read contains one record and half of the next. What should its parser do?",
        "choices": [
            "Use explicit record lengths or delimiters and buffer incomplete records.",
            "Treat each TCP read as exactly one application record.",
            "Request that TCP set a different destination port for each record boundary."
        ],
        "explanation": "TCP preserves byte order, but it can split or combine application writes. Framing belongs in the application protocol.",
        "ref": "p. 7"
    },
    {
        "id": "m4-08",
        "topic": "4.2",
        "question": "A sensor team budgets 40 bytes per reading. Its captured UDP length field is 0x0028. How many bytes of sensor payload actually arrived?",
        "choices": [
            "32 bytes.",
            "40 bytes.",
            "48 bytes."
        ],
        "explanation": "Hex 0x28 is 40 decimal, and the UDP length includes the fixed 8-byte header. The application receives 40 − 8 = 32 bytes.",
        "ref": "p. 7"
    },
    {
        "id": "m4-09",
        "topic": "4.2",
        "question": "A video uploader sees a receive window of 24 KB and a congestion window of 10 KB. It already has 7 KB unacknowledged. With no new ACK, how much more may it send?",
        "choices": [
            "3 KB.",
            "10 KB.",
            "17 KB."
        ],
        "explanation": "The smaller window limits total data in flight to 10 KB. The existing 7 KB occupies part of that allowance, leaving 3 KB.",
        "ref": "p. 8"
    },
    {
        "id": "m4-10",
        "topic": "4.2",
        "question": "A receiver expects byte 4001. It gets 4001–4500, misses 4501–5000, then buffers 5001–5500. Which cumulative ACK should it send now?",
        "choices": [
            "4501.",
            "5001.",
            "5501."
        ],
        "explanation": "The cumulative ACK names the first missing byte. Buffering later bytes does not fill the gap starting at 4501.",
        "ref": "p. 8"
    },
    {
        "id": "m4-11",
        "topic": "4.2",
        "question": "A 100 Mb/s link has an 80 ms RTT. A TCP file copy can keep at most 40,000 bytes in flight. Ignoring overhead and losses, what bound explains its low throughput?",
        "choices": [
            "4 Mb/s.",
            "32 Mb/s.",
            "50 Mb/s."
        ],
        "explanation": "The sender can deliver about one window per RTT. 40,000 × 8 ÷ 0.080 = 4,000,000 bits per second, below the link rate.",
        "ref": "p. 8"
    },
    {
        "id": "m4-12",
        "topic": "4.2",
        "question": "A TCP segment has data offset 8 and its entire length is 112 bytes, excluding IP. How many bytes should the stream parser count as data?",
        "choices": [
            "80 bytes.",
            "104 bytes.",
            "92 bytes."
        ],
        "explanation": "Data offset counts 4-byte words. The header is 8 × 4 = 32 bytes, so 112 − 32 = 80 bytes belong to the stream.",
        "ref": "p. 8"
    },
    {
        "id": "m4-13",
        "topic": "4.2",
        "question": "A logger has two independent 60-byte UDP messages to send. The consumer needs to distinguish them, and the receive buffer is large enough. How should the logger send them?",
        "choices": [
            "Use one datagram per message and handle loss at the application if necessary.",
            "Use two TCP writes and assume each read will return exactly 60 bytes.",
            "Use one UDP datagram for both and assume UDP identifies the internal boundary."
        ],
        "explanation": "UDP preserves the sender's datagram boundaries. If multiple records share a datagram, the application must add its own framing.",
        "ref": "p. 7"
    },
    {
        "id": "m4-14",
        "topic": "4.3",
        "question": "A client opens with SYN seq 620, and the server replies SYN+ACK seq 9100, ack 621. What should the client's final pure ACK contain?",
        "choices": [
            "seq 621, ack 9101.",
            "seq 622, ack 9100.",
            "seq 620, ack 9101."
        ],
        "explanation": "Each SYN consumes one sequence number in its own direction. A pure ACK consumes none, so the client's first data can also start at 621.",
        "ref": "p. 11"
    },
    {
        "id": "m4-15",
        "topic": "4.3",
        "question": "After a handshake, a client sends 240 bytes beginning at seq 1001, then sends a FIN immediately after the data. If everything arrives in order, what ACK covers both?",
        "choices": [
            "1242.",
            "1241.",
            "1240."
        ],
        "explanation": "The payload occupies 1001–1240. FIN occupies sequence position 1241, so the receiver next expects 1242.",
        "ref": "p. 11"
    },
    {
        "id": "m4-16",
        "topic": "4.3",
        "question": "A design review proposes accepting a connection immediately after sending SYN+ACK. A delayed SYN from an old, closed connection arrives. Which guarantee would the design lose?",
        "choices": [
            "Confirmation that the current client received this server's new sequence number.",
            "The ability to put the client's address in an IP packet.",
            "The ability to choose a server-side receive window before sending any data."
        ],
        "explanation": "The final ACK acknowledges the server's current ISN. Without it, a stale SYN could be mistaken for a live peer's request.",
        "ref": "p. 12"
    },
    {
        "id": "m4-17",
        "topic": "4.3",
        "question": "The final pure ACK of a handshake disappears. The client then sends its first request with a valid ACK of the server's SYN. How can the server proceed?",
        "choices": [
            "Accept the acknowledgement on the data segment and enter ESTABLISHED.",
            "Discard the data because the third message must contain no payload.",
            "Ask the client to choose a different source port before acknowledging the request."
        ],
        "explanation": "The server needs a valid acknowledgement of its SYN. A subsequent data-bearing ACK can supply it while the server is still waiting.",
        "ref": "p. 12"
    },
    {
        "id": "m4-18",
        "topic": "4.3",
        "question": "A service sends FIN after its response, receives an ACK, then sees more request bytes from its peer. What does TCP permit at this point?",
        "choices": [
            "The peer can keep sending until it closes its own direction.",
            "Both endpoints must discard all data as soon as the first FIN is acknowledged.",
            "The response sender can send additional response bytes on its already closed direction."
        ],
        "explanation": "A FIN closes only the sender's byte stream. Acknowledging it does not close the acknowledging peer's independent sending direction.",
        "ref": "p. 12"
    },
    {
        "id": "m4-19",
        "topic": "4.3",
        "question": "A client actively closes a connection. MSL is 45 seconds, and the last ACK gets lost. What does the standard textbook close model require?",
        "choices": [
            "Retain TIME-WAIT for 90 seconds and acknowledge a retransmitted FIN.",
            "Retain TIME-WAIT for 45 seconds and send a new SYN on a retransmitted FIN.",
            "Delete the connection immediately because a pure ACK cannot be lost."
        ],
        "explanation": "The active closer waits 2 × MSL. It can answer the peer's repeated FIN and allow delayed segments from the old connection to expire.",
        "ref": "p. 14"
    },
    {
        "id": "m4-20",
        "topic": "4.3",
        "question": "A proxy designer predicts exactly four TCP segments in every orderly close. Its test sees FIN, FIN+ACK, ACK. What explains the three-segment trace?",
        "choices": [
            "The peer was ready to finish sending and combined its FIN with its ACK.",
            "TCP omitted one direction's FIN because the connection was full-duplex.",
            "The second packet was a reset, so neither FIN needed acknowledgement."
        ],
        "explanation": "Both directions must close, but acknowledgement of the first FIN can travel with the peer's FIN when it has no more data.",
        "ref": "p. 12"
    },
    {
        "id": "m4-21",
        "topic": "4.4",
        "question": "A receiver advertises a zero window, drains its buffer, then loses its window-update ACK. The sender still has bytes queued. Which timer breaks the stalemate?",
        "choices": [
            "Persistence timer.",
            "Keepalive timer.",
            "TIME-WAIT timer."
        ],
        "explanation": "A persistence probe elicits a fresh window advertisement. It addresses blocked pending data even if the receiver's reopening update was lost.",
        "ref": "p. 14"
    },
    {
        "id": "m4-22",
        "topic": "4.4",
        "question": "A long-lived terminal has no application data pending in either direction. A laptop disappears from the network without closing. Which optional TCP mechanism can detect the abandoned connection?",
        "choices": [
            "Keepalive probes after an idle interval.",
            "Persistence probes after a zero-window advertisement.",
            "Retransmission of the oldest unacknowledged data segment."
        ],
        "explanation": "Keepalive targets an idle connection whose peer may have vanished. Here there is no outstanding data or reported zero window.",
        "ref": "p. 14"
    },
    {
        "id": "m4-23",
        "topic": "4.4",
        "question": "A lab uses the simple estimator S_new = 7/8 × S_old + 1/8 × sample and RTO = 2 × S_new. The old S is 64 ms and the new sample is 96 ms. What RTO should it log?",
        "choices": [
            "136 ms.",
            "192 ms.",
            "128 ms."
        ],
        "explanation": "The estimate moves partway toward the sample: 56 + 12 = 68 ms. The specified textbook multiplier yields 136 ms.",
        "ref": "p. 14"
    },
    {
        "id": "m4-24",
        "topic": "4.4",
        "question": "A fresh connection measures its first RTT at 180 ms. Under the variance-based estimator, ignoring the minimum RTO and clock granularity, what initial RTO results?",
        "choices": [
            "540 ms.",
            "360 ms.",
            "900 ms."
        ],
        "explanation": "For the first sample, SRTT = 180 ms and RTTVAR = 90 ms. Thus SRTT + 4 × RTTVAR = 180 + 360 = 540 ms.",
        "ref": "p. 15"
    },
    {
        "id": "m4-25",
        "topic": "4.4",
        "question": "A sender has SRTT 100 ms and RTTVAR 20 ms. The next clean RTT sample is 140 ms. With α = 1/8, β = 1/4 and no RTO floor, what is the new RTO?",
        "choices": [
            "205 ms.",
            "200 ms.",
            "185 ms."
        ],
        "explanation": "Update variation first using the old estimate: 0.75 × 20 + 0.25 × 40 = 25 ms. SRTT becomes 105 ms, so RTO is 105 + 4 × 25 = 205 ms.",
        "ref": "p. 15"
    },
    {
        "id": "m4-26",
        "topic": "4.4",
        "question": "A sender retransmits a segment after 1 second. Its ACK arrives 15 ms later, without TCP timestamps. Should it feed a 15 ms sample into its RTT estimator?",
        "choices": [
            "No; wait for an unambiguous sample from a transmission that was never repeated.",
            "Yes; the most recent copy is always the one the ACK confirms.",
            "Yes; add 1 second to 15 ms and use that sum as a certain RTT sample."
        ],
        "explanation": "The ACK does not identify which transmission it acknowledges. Karn's rule avoids both potentially misleading measurements.",
        "ref": "p. 15"
    },
    {
        "id": "m4-27",
        "topic": "4.4",
        "question": "A sender starts with a 2-second RTO. With no ACKs and no backoff cap reached, how long after the original send does the third timeout occur?",
        "choices": [
            "14 seconds.",
            "8 seconds.",
            "6 seconds."
        ],
        "explanation": "The waits are 2, 4 and 8 seconds, measured successively. The third expiry occurs at elapsed time 2 + 4 + 8 = 14 seconds.",
        "ref": "p. 15"
    },
    {
        "id": "m4-28",
        "topic": "4.4",
        "question": "A bulk transfer sees three duplicate ACKs for the same gap while later segments continue to arrive. In classic TCP, what can avoid a full timeout delay?",
        "choices": [
            "Fast retransmit the apparent missing segment.",
            "Open a new TCP connection for the missing bytes.",
            "Enter TIME-WAIT and wait for late duplicates to expire."
        ],
        "explanation": "Repeated cumulative ACKs indicate that later data is reaching the receiver past a gap. Classic fast retransmit uses this evidence before the RTO expires.",
        "ref": "p. 15"
    },
    {
        "id": "m4-29",
        "topic": "4.5",
        "question": "A phone asks the campus resolver for a final address. The resolver has an empty cache and receives a .com referral from a root server. Who should follow the referral?",
        "choices": [
            "The campus resolver, continuing its iterative lookup.",
            "The phone, because it must contact each level after a recursive request.",
            "The root server, because a referral obliges it to fetch the final address."
        ],
        "explanation": "The stub requested recursive service from the campus resolver. The resolver follows referrals and returns the final result or an error to the phone.",
        "ref": "p. 19"
    },
    {
        "id": "m4-30",
        "topic": "4.5",
        "question": "A college publishes a portal on both IPv4 and IPv6 and wants a separate hostname to follow it if its addresses change. Which records fit?",
        "choices": [
            "A and AAAA at the portal hostname, plus a CNAME from the separate alias to that hostname.",
            "Only an AAAA record at the alias, because it can store IPv4 and IPv6 together.",
            "Two MX records at the portal hostname, one for each IP version."
        ],
        "explanation": "A and AAAA store IPv4 and IPv6 addresses. A CNAME refers to the canonical name, so the alias can follow changes without copying addresses.",
        "ref": "p. 18"
    },
    {
        "id": "m4-31",
        "topic": "4.5",
        "question": "At 09:50 a resolver caches an A record with TTL 1800 seconds. The address changes at 10:00. With ordinary TTL caching and no flush, when can that cached answer expire?",
        "choices": [
            "10:20.",
            "10:30.",
            "10:00."
        ],
        "explanation": "The TTL starts when the resolver caches the record. Thirty minutes after 09:50 is 10:20; changing the authoritative record does not invalidate cached copies immediately.",
        "ref": "p. 20"
    },
    {
        "id": "m4-32",
        "topic": "4.5",
        "question": "A publisher needs two servers that can both answer authoritatively even during a short primary outage. Which design provides this?",
        "choices": [
            "An authoritative secondary with a current, unexpired zone transferred from the primary.",
            "A root server configured to cache the publisher's pages.",
            "A recursive resolver whose A-record TTL is set to zero."
        ],
        "explanation": "A secondary holds a zone copy and can answer authoritatively while the copy is valid. A recursive cache alone does not become authoritative.",
        "ref": "p. 18"
    },
    {
        "id": "m4-33",
        "topic": "4.5",
        "question": "Small DNS lookups succeed through a firewall. A larger response carries the truncation flag, then resolution fails. Which normal fallback should the design allow?",
        "choices": [
            "A new query over TCP to DNS port 53.",
            "A retry over UDP to HTTP port 80.",
            "An FTP data connection to the authoritative server."
        ],
        "explanation": "A truncated UDP answer tells the resolver to retry over TCP for the complete response. Permitting only UDP 53 can produce this size-dependent failure.",
        "ref": "p. 20"
    },
    {
        "id": "m4-34",
        "topic": "4.5",
        "question": "A mail domain publishes MX 10 mx-a and MX 30 mx-b, both with valid address records. The sender needs a delivery endpoint. Which plan follows DNS semantics?",
        "choices": [
            "Try mx-a first, resolving its hostname to an IP address.",
            "Use 10 as the TCP port and connect directly to the domain's web IP.",
            "Try mx-b first because 30 denotes the greater routing preference."
        ],
        "explanation": "Lower MX preference numbers are tried first. An MX target is a hostname that needs address resolution, not a port or the address itself.",
        "ref": "p. 18"
    },
    {
        "id": "m4-35",
        "topic": "4.5",
        "question": "A developer asks for a hostname before it exists. Minutes after its creation, the authoritative server answers correctly, but one resolver still says NXDOMAIN. Why?",
        "choices": [
            "That resolver may still hold a negative cache entry.",
            "A newly created name must first acquire a PTR record to resolve forward.",
            "The resolver can only resolve names it serves authoritatively."
        ],
        "explanation": "Negative caching can retain an earlier no-such-name result for a bounded interval. Different caches can therefore disagree temporarily.",
        "ref": "p. 19"
    },
    {
        "id": "m4-36",
        "topic": "4.5",
        "question": "An operations dashboard has an IP address and wants its published reverse-DNS name. Which record should it request in the reverse zone?",
        "choices": [
            "PTR.",
            "CNAME at the forward hostname.",
            "MX at the domain apex."
        ],
        "explanation": "PTR records map reverse address names to hostnames. Looking up forward A or AAAA records starts with a hostname, which the dashboard does not yet have.",
        "ref": "p. 18"
    },
    {
        "id": "m4-37",
        "topic": "4.6",
        "question": "A page needs one HTML file followed by four images, all on one host. One RTT is 30 ms. With serial non-persistent HTTP, no DNS, TLS or transmission time, what is the fetch time?",
        "choices": [
            "300 ms.",
            "180 ms.",
            "150 ms."
        ],
        "explanation": "Each of the five objects needs one TCP handshake RTT and one request/response RTT. Five × two × 30 ms = 300 ms.",
        "ref": "p. 22"
    },
    {
        "id": "m4-38",
        "topic": "4.6",
        "question": "A page's HTML reveals eight small images on one host. Using one initially unopened persistent HTTP/1.1 connection with ideal pipelining, what is the minimum RTT count? Ignore DNS, TLS and transmission time.",
        "choices": [
            "3 RTTs.",
            "2 RTTs.",
            "10 RTTs."
        ],
        "explanation": "One RTT opens TCP, one fetches the HTML, and one fetches the batch of images after their URLs are known. The HTML dependency prevents fetching everything in the second RTT.",
        "ref": "p. 22"
    },
    {
        "id": "m4-39",
        "topic": "4.6",
        "question": "A browser has a cached timetable. After a conditional GET it receives HTTP 304 with an empty body. What should the UI display?",
        "choices": [
            "The validated cached timetable.",
            "An empty timetable because the server returned no representation bytes.",
            "A login screen because the server refused to release the timetable."
        ],
        "explanation": "304 indicates the cached representation remains usable. Omitting the response body saves the cost of sending the same content again.",
        "ref": "p. 22"
    },
    {
        "id": "m4-40",
        "topic": "4.6",
        "question": "A student starts an exam, closes the connection, and opens the next question on a new connection. How can the server find the correct attempt?",
        "choices": [
            "Use a session identifier returned in a cookie to look up the attempt.",
            "Treat the new TCP source port as the student's durable identifier.",
            "Use HTTP keep-alive to recover the closed connection's local memory."
        ],
        "explanation": "HTTP requests can carry a session cookie across connections. The application maps that identifier to stored attempt data independently of the transport socket.",
        "ref": "p. 24"
    },
    {
        "id": "m4-41",
        "topic": "4.6",
        "question": "A results service accepts an email submission, but the recipient's mail server is temporarily offline. Which design avoids asking the student to submit again immediately?",
        "choices": [
            "Queue the accepted message and retry SMTP relay later.",
            "Ask the recipient's IMAP client to pull the message directly from the sender's browser.",
            "Drop the message as soon as its first TCP connection attempt fails."
        ],
        "explanation": "Mail transfer agents use store-and-forward delivery. Submission and final relay can happen at different times, with retries for temporary failure.",
        "ref": "p. 23"
    },
    {
        "id": "m4-42",
        "topic": "4.6",
        "question": "A student wants to read campus mail on a phone and laptop, with folders and read state synchronized. Which protocol pair serves normal client submission and mailbox access?",
        "choices": [
            "SMTP submission on 587 and IMAP over TLS on 993.",
            "IMAP on 993 for both outbound delivery and mailbox access.",
            "SMTP relay on 25 for both message sending and folder synchronization."
        ],
        "explanation": "SMTP handles outgoing submission. IMAP manages a server-side mailbox and synchronizes its state across clients.",
        "ref": "p. 24"
    },
    {
        "id": "m4-43",
        "topic": "4.6",
        "question": "An email with a Bcc recipient has no visible To header naming that recipient. What should the forwarding server use to deliver the copy?",
        "choices": [
            "The SMTP envelope recipient supplied by RCPT TO.",
            "The message's displayed To header only.",
            "The MX preference number as a mailbox identifier."
        ],
        "explanation": "Servers route using envelope recipients. Displayed headers are part of the message and need not include every intended recipient.",
        "ref": "p. 23"
    },
    {
        "id": "m4-44",
        "topic": "4.6",
        "question": "A browser has no DNS cache or existing connections and is fetching a URL with HTTPS over TCP. Which dependency order can its trace show?",
        "choices": [
            "Resolve the hostname, connect to port 443, negotiate TLS, then send the encrypted HTTP request.",
            "Send the HTTP request, then use its status code to discover the server IP.",
            "Negotiate TLS with the root DNS server, then use that TLS session at the web server."
        ],
        "explanation": "For this fresh TCP-based request, DNS supplies the address, TCP creates the stream, and TLS protects the HTTP exchange with the web server.",
        "ref": "p. 29"
    },
    {
        "id": "m4-45",
        "topic": "4.7",
        "question": "Two legacy terminals represent line endings differently. A Telnet session must interoperate without making the remote application understand both encodings. Which layer of the design handles it?",
        "choices": [
            "Translate local terminal conventions to and from Telnet's Network Virtual Terminal format.",
            "Expect TCP checksum verification to normalize the character bytes.",
            "Assign a distinct TCP port to each terminal's line-ending convention."
        ],
        "explanation": "Telnet uses a shared NVT representation and endpoint translation. TCP reliably transports bytes without rewriting their terminal meaning.",
        "ref": "p. 25"
    },
    {
        "id": "m4-46",
        "topic": "4.7",
        "question": "A company retires a cleartext remote console used on shared Wi-Fi. Which replacement meets the requirement to encrypt both credentials and terminal traffic?",
        "choices": [
            "SSH with server identity verification.",
            "Telnet on a nonstandard port.",
            "Telnet with a longer TCP keepalive interval."
        ],
        "explanation": "Plain Telnet sends login details and commands in readable form. SSH supplies an encrypted channel and host authentication; port changes and timers do neither.",
        "ref": "p. 25"
    },
    {
        "id": "m4-47",
        "topic": "4.7",
        "question": "A lab's FTP client behind NAT logs in, but LIST stalls in active mode. Which design change is most likely to restore directory listings?",
        "choices": [
            "Use passive mode so the client initiates the data connection to the server's advertised endpoint.",
            "Move the LIST command from the control connection to an HTTP connection.",
            "Reuse the FTP login reply as the directory listing, without opening a data connection."
        ],
        "explanation": "The login and command path can work while the separate server-initiated data connection fails at the NAT. Passive mode makes the data connection outbound from the client.",
        "ref": "p. 26"
    },
    {
        "id": "m4-48",
        "topic": "4.7",
        "question": "An FTP server's PASV reply advertises (192,0,2,12,8,17). Which endpoint should the client use for the next data transfer?",
        "choices": [
            "192.0.2.12:2065.",
            "192.0.2.12:817.",
            "192.0.2.12:4360."
        ],
        "explanation": "The last two numbers encode high and low port bytes. Compute 8 × 256 + 17 = 2065; concatenating the decimal strings or reversing their order gives the wrong port.",
        "ref": "p. 26"
    },
    {
        "id": "m4-49",
        "topic": "4.7",
        "question": "An FTP download completes successfully but the binary model file fails its checksum. The session used TYPE A. Which change addresses the likely cause?",
        "choices": [
            "Use TYPE I and transfer the file again.",
            "Enable TCP keepalive so text conversion becomes reversible.",
            "Use a second FTP control connection for every data block."
        ],
        "explanation": "ASCII mode can translate line endings, changing binary bytes despite reliable transport. Image or binary mode transfers the exact byte sequence.",
        "ref": "p. 27"
    },
    {
        "id": "m4-50",
        "topic": "4.7",
        "question": "A backup client must encrypt uploaded files and use the organization's existing SSH service on port 22. Which file-transfer protocol fits directly?",
        "choices": [
            "SFTP.",
            "FTPS.",
            "Classic FTP in passive mode."
        ],
        "explanation": "SFTP operates over SSH. FTPS secures FTP with TLS and retains FTP's control/data design, while passive mode only changes how the FTP data connection is established.",
        "ref": "p. 27"
    }
];
