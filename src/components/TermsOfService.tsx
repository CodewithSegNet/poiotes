import { ScrollArea } from './ui/scroll-area';

export function TermsOfService() {
  return (
    <ScrollArea className="h-[70vh] w-full pr-4">
      <div className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="text-2xl mb-4 text-yellow-300">Terms of Service</h2>
          <p className="text-muted-foreground mb-4">
            <strong>Effective Date:</strong> August 14, 2025<br />
            <strong>Last Updated:</strong> August 14, 2025
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">1. Acceptance of Terms</h3>
          <p className="text-muted-foreground">
            By accessing our website, engaging our services, or entering into an agreement with Poietes Limited 
            ("Company," "we," "our," or "us"), you ("Client," "you," or "your") agree to be bound by these Terms 
            of Service ("Terms"). If you do not agree to these Terms, please do not use our services or website.
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">2. Description of Services</h3>
          <div className="text-muted-foreground space-y-3">
            <p>Poietes Limited provides software development and technology consulting services, including but not limited to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Custom software development and programming</li>
              <li>Web and mobile application development</li>
              <li>System integration and API development</li>
              <li>Technology consulting and architecture design</li>
              <li>Software maintenance and support services</li>
              <li>Digital transformation solutions</li>
              <li>Quality assurance and testing services</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">3. Service Agreements</h3>
          <div className="text-muted-foreground space-y-3">
            <h4 className="text-base mb-2 text-foreground">3.1 Project Scope</h4>
            <p>All services will be provided according to a mutually agreed project scope, timeline, and specifications as outlined in individual service agreements or statements of work.</p>
            
            <h4 className="text-base mb-2 text-foreground">3.2 Client Responsibilities</h4>
            <p>Clients are responsible for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Providing accurate project requirements and specifications</li>
              <li>Timely provision of necessary materials, access, and information</li>
              <li>Prompt feedback and approvals during development phases</li>
              <li>Payment of fees according to agreed terms</li>
              <li>Compliance with applicable laws and regulations</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">4. Payment Terms</h3>
          <div className="text-muted-foreground space-y-3">
            <h4 className="text-base mb-2 text-foreground">4.1 Fees and Billing</h4>
            <p>Payment terms will be specified in individual service agreements. Unless otherwise agreed:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Payment schedules will be based on project milestones</li>
              <li>Invoices are due within 30 days of receipt</li>
              <li>Late payments may incur additional charges</li>
              <li>All fees are in Nigerian Naira unless otherwise specified</li>
            </ul>
            
            <h4 className="text-base mb-2 text-foreground">4.2 Refunds</h4>
            <p>Refunds will be considered on a case-by-case basis for services not yet delivered, subject to any costs already incurred.</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">5. Intellectual Property Rights</h3>
          <div className="text-muted-foreground space-y-3">
            <h4 className="text-base mb-2 text-foreground">5.1 Client-Owned Materials</h4>
            <p>Clients retain ownership of their pre-existing intellectual property, data, and materials provided to us.</p>
            
            <h4 className="text-base mb-2 text-foreground">5.2 Developed Solutions</h4>
            <p>Unless otherwise agreed in writing:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Custom software developed specifically for clients will be owned by the client upon full payment</li>
              <li>We retain ownership of our general methodologies, tools, and pre-existing intellectual property</li>
              <li>We may retain rights to use general knowledge and experience gained during projects</li>
            </ul>
            
            <h4 className="text-base mb-2 text-foreground">5.3 Open Source and Third-Party Components</h4>
            <p>Any open source or third-party components used will be subject to their respective licenses and terms.</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">6. Confidentiality</h3>
          <div className="text-muted-foreground space-y-2">
            <p>We understand the importance of protecting confidential information:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>We will maintain strict confidentiality of all client information</li>
              <li>Confidential information will only be used for providing agreed services</li>
              <li>Non-disclosure agreements will be executed when required</li>
              <li>We implement appropriate security measures to protect confidential data</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">7. Warranties and Disclaimers</h3>
          <div className="text-muted-foreground space-y-3">
            <h4 className="text-base mb-2 text-foreground">7.1 Service Warranty</h4>
            <p>We warrant that our services will be performed with professional skill and care in accordance with industry standards.</p>
            
            <h4 className="text-base mb-2 text-foreground">7.2 Disclaimer</h4>
            <p>EXCEPT AS EXPRESSLY STATED, ALL SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">8. Limitation of Liability</h3>
          <div className="text-muted-foreground space-y-2">
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Our total liability will not exceed the amount paid for the specific service giving rise to the claim</li>
              <li>We will not be liable for indirect, consequential, or incidental damages</li>
              <li>We will not be liable for loss of profits, data, or business opportunities</li>
              <li>These limitations apply regardless of the legal theory of recovery</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">9. Indemnification</h3>
          <p className="text-muted-foreground">
            Clients agree to indemnify and hold us harmless from any claims, damages, or expenses arising from: 
            (a) client's use of delivered software or services; (b) client's violation of these Terms; 
            (c) client's infringement of third-party rights; or (d) client-provided materials or content.
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">10. Force Majeure</h3>
          <p className="text-muted-foreground">
            We will not be liable for delays or failures in performance due to circumstances beyond our reasonable 
            control, including but not limited to natural disasters, government actions, internet outages, or other 
            unforeseeable events.
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">11. Termination</h3>
          <div className="text-muted-foreground space-y-3">
            <h4 className="text-base mb-2 text-foreground">11.1 Termination Rights</h4>
            <p>Either party may terminate a service agreement:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>For material breach that remains uncured after 30 days written notice</li>
              <li>For convenience with 30 days written notice</li>
              <li>Immediately for insolvency or bankruptcy</li>
            </ul>
            
            <h4 className="text-base mb-2 text-foreground">11.2 Effect of Termination</h4>
            <p>Upon termination, clients will pay for all services performed up to the termination date, and we will deliver all completed work products.</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">12. Data Protection and Privacy</h3>
          <p className="text-muted-foreground">
            Our collection, use, and protection of personal information is governed by our Privacy Policy, 
            which is incorporated into these Terms by reference. We comply with applicable data protection 
            laws and regulations.
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">13. Website Use</h3>
          <div className="text-muted-foreground space-y-2">
            <p>When using our website, you agree to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Use the website only for lawful purposes</li>
              <li>Not interfere with website security or functionality</li>
              <li>Not attempt to gain unauthorized access to any systems</li>
              <li>Respect intellectual property rights</li>
              <li>Not transmit harmful or malicious content</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">14. Dispute Resolution</h3>
          <div className="text-muted-foreground space-y-3">
            <h4 className="text-base mb-2 text-foreground">14.1 Negotiation</h4>
            <p>Parties will first attempt to resolve disputes through good faith negotiation.</p>
            
            <h4 className="text-base mb-2 text-foreground">14.2 Mediation and Arbitration</h4>
            <p>If negotiation fails, disputes may be resolved through mediation or arbitration as agreed by the parties.</p>
            
            <h4 className="text-base mb-2 text-foreground">14.3 Governing Law</h4>
            <p>These Terms are governed by the laws of the Federal Republic of Nigeria, and any legal proceedings will be conducted in the courts of the Federal Capital Territory, Abuja.</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">15. General Provisions</h3>
          <div className="text-muted-foreground space-y-3">
            <h4 className="text-base mb-2 text-foreground">15.1 Entire Agreement</h4>
            <p>These Terms, along with any written service agreements, constitute the entire agreement between the parties.</p>
            
            <h4 className="text-base mb-2 text-foreground">15.2 Amendments</h4>
            <p>We may update these Terms from time to time. Material changes will be communicated to active clients.</p>
            
            <h4 className="text-base mb-2 text-foreground">15.3 Severability</h4>
            <p>If any provision of these Terms is found unenforceable, the remaining provisions will continue in full force.</p>
            
            <h4 className="text-base mb-2 text-foreground">15.4 Assignment</h4>
            <p>We may assign our rights and obligations under these Terms. Clients may not assign without our written consent.</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">16. Contact Information</h3>
          <div className="text-muted-foreground space-y-2">
            <p>For questions about these Terms or our services, please contact us:</p>
            <div className="bg-muted/20 p-4 rounded-lg mt-3">
              <p><strong>Poietes Limited</strong></p>
              <p>FCT Abuja, Nigeria</p>
              <p>Email: Poietesltd@gmail.com</p>
              <p>Phone: +234 807 778 4848</p>
            </div>
            <p className="mt-3 text-xs">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}