const topicNotes = {
  '3.1': {
    summary: 'Routing computes paths between networks. Forwarding uses the installed routing information to move each packet one hop. IP provides best-effort delivery, so packets can arrive out of order or be lost.',
    formula: 'Destination IP → longest matching prefix → next hop and outgoing interface.',
    diagram: 'Host A → R1 → R2 → Host B. Each router forwards one hop.',
    question: 'A link fails. What must happen before a router starts forwarding along the newly computed path?',
    answer: 'The routing process learns the change, computes the new route and installs the corresponding forwarding entry.'
  },
  '3.2': {
    summary: 'Unicast addresses one receiver. Multicast addresses a group with interested members. An IPv4 local broadcast reaches every host in the broadcast domain.',
    formula: 'Shared-link load before the branch: n unicast copies need n × stream rate; one multicast copy needs the stream rate.',
    diagram: 'Sender → one WAN stream → branch router → subscribed LANs.',
    question: 'Three of twenty remote hosts join 239.1.1.1. Which IP addresses appear on a multicast packet?',
    answer: 'The source is the sender’s own unicast IP. The destination is 239.1.1.1, which identifies the group.'
  },
  '3.3': {
    summary: 'Historical classful IPv4 uses default prefixes /8 for A, /16 for B and /24 for C. D is multicast and E is reserved.',
    formula: 'First octet: ordinary A 1–126; B 128–191; C 192–223; D 224–239; E 240–255. 127/8 is loopback.',
    diagram: '150.23 | 9.40 → historical Class B → network 150.23.0.0/16.',
    question: 'How many ordinary host addresses fit in a legacy Class B network using its default mask?',
    answer: 'Sixteen host bits give 2¹⁶ − 2 = 65,534 usable addresses after reserving the network and directed broadcast.'
  },
  '3.4': {
    summary: 'CIDR gives the actual network boundary as a prefix length. Find the aligned block containing the address before choosing an IPv4 host or gateway.',
    formula: 'Network = IP bitwise AND mask. Block size = 2^(32 − prefix length). Broadcast = network + block size − 1.',
    diagram: '192.0.2.77/27 → .64 network → .65–.94 usable → .95 broadcast.',
    question: 'Can 192.0.2.96 be the ordinary same-subnet gateway for 192.0.2.77/27?',
    answer: 'No. The containing subnet ends at .95. Address .96 starts the next /27. Choose an unused address in .65–.94.'
  },
  '3.5': {
    summary: 'FLSM uses equal blocks. VLSM fits blocks to different demands: count all interfaces, allocate the largest first and align every base. A single exact aggregate requires contiguous blocks on the appropriate boundary.',
    formula: 'For an ordinary LAN needing H interfaces, choose the smallest h with 2ʰ − 2 ≥ H. Its prefix length is 32 − h.',
    diagram: '10.0.0.0/24 → .0/25 (126 usable), .128/26 (62), .192/27 (30), .224/27 spare.',
    question: 'Can one prefix advertise 10.4.4.0/24 through 10.4.7.0/24 without covering any other network?',
    answer: 'Yes. Four adjacent /24s form a /22 here because the third octet starts at a multiple of four. Advertise 10.4.4.0/22.'
  },
  '3.6': {
    summary: 'Source NAT translates an internal source address at the edge. PAT also uses port translations so multiple clients can share one public IPv4 address. The gateway retains the mapping for replies.',
    formula: 'Outbound: translate source IP and port. Matching reply: restore private destination IP and port.',
    diagram: '10.0.0.8:42000 ⇄ PAT mapping ⇄ 198.51.100.9:61002.',
    question: 'Two laptops choose the same TCP source port to contact the same server. How does PAT distinguish the replies?',
    answer: 'It assigns distinct public ports to the concurrent flows. A reply’s public destination port identifies the appropriate private mapping.'
  },
  '3.7': {
    summary: 'IPv6 has eight 16-bit groups. Drop leading zeros within each group. In canonical text replace the longest run of two or more zero groups with :: once, choosing the leftmost run on a tie.',
    formula: 'Expansion: missing groups = 8 − explicit groups. Insert the missing zero groups and pad each group to four hexadecimal digits.',
    diagram: '2001:0db8:0000:0000:0000:0042:0000:0001 ⇄ 2001:db8::42:0:1.',
    question: 'Expand 2001:db8:5::9. How many groups does :: supply?',
    answer: 'Four groups are explicit, so :: supplies four zeros: 2001:0db8:0005:0000:0000:0000:0000:0009.'
  },
  '3.8': {
    summary: 'Dijkstra finds shortest paths with non-negative link costs. Start at zero for the source and infinity elsewhere. Repeatedly settle the least-cost unsettled node and relax its outgoing links.',
    formula: 'If D(u) + cost(u,v) < D(v), update D(v) to the smaller value and record predecessor(v) = u.',
    diagram: 'S—2—A—3—D; S—8—D. The path through A costs 5.',
    question: 'D currently costs 8. A is settled at cost 2 and has a link of cost 3 to D. What changes?',
    answer: 'D’s tentative distance becomes 5, its predecessor becomes A, and the path shown starts from S via A.'
  },
  '3.9': {
    summary: 'A link-state router measures local links and floods advertisements. Routers in the same area build a topology database and compute shortest paths from their own positions. OSPF uses this method.',
    formula: 'Adjacency change → new link-state advertisement → topology update → SPF calculation → forwarding update.',
    diagram: 'R1 describes its adjacent links → information floods through the area → each router computes routes.',
    question: 'A router holds advertisement sequence 84 and receives sequence 81 for the same advertisement. Which copy wins?',
    answer: 'During normal operation sequence 84 is newer. The delayed older copy must not replace its topology information.'
  },
  '3.10': {
    summary: 'Distance-vector routing chooses among distances reported by neighbours. A router adds its own link cost to each report. After a failure, stale vectors can produce loops and count-to-infinity.',
    formula: 'Dₓ(y) = min over neighbours v of [cost(x,v) + Dᵥ(y)]. RIP treats 16 as unreachable.',
    diagram: 'X—2—A reports 6 to Y: total 8. X—4—B reports 3 to Y: total 7.',
    question: 'Which next hop does X choose, and what would poison reverse advertise back to that hop?',
    answer: 'X chooses B at cost 7. With poison reverse it advertises Y as unreachable back to B, because its route depends on B.'
  },
  '3.11': {
    summary: 'ARP resolves a local next-hop MAC for a known IPv4 address. Historical RARP maps a MAC to an IP. ICMP reports errors and supports diagnostics. IGMP manages local IPv4 multicast group membership.',
    formula: 'Remote IP → ARP for the gateway. Same-subnet IP → ARP for the destination itself.',
    diagram: 'Laptop → learns gateway MAC → Ethernet frame to gateway carries IP packet addressed to remote server.',
    question: 'A traceroute probe expires at a router. Which message can identify that hop? Which protocol reports joining an IPv4 multicast group?',
    answer: 'A router may return ICMP Time Exceeded. A local receiver reports membership through IGMP.'
  },
  '3.12': {
    summary: 'Congestion occurs when offered load exceeds network resources. Open-loop policies prevent overload in advance. Closed-loop policies detect developing congestion and use feedback to change traffic.',
    formula: 'Growing queue → congestion indication → sender reduces rate → queue can drain.',
    diagram: 'Admission limit before a session = open loop. ECN mark followed by a rate reduction = closed loop.',
    question: 'A fast receiver has ample memory, but many senders overload a shared router. Would increasing receiver buffer space solve the bottleneck?',
    answer: 'No. Controlling aggregate traffic or increasing path capacity addresses this network bottleneck. Receiver flow control protects an individual receiving host.'
  }
};
