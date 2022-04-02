import React, { Component } from "react";

import b_sm_5 from "../../../assets/images/blog/b-sm5.png";

import bd_png from "../../../assets/images/blog/bd.png"
import b_g_1 from "../../../assets/images/blog/blog-g-1.png"
import b_g_2 from "../../../assets/images/blog/blog-g-2.png"
import b_g_3 from "../../../assets/images/blog/blog-g-3.png"
import c_1 from "../../../assets/images/blog/c-1.png"
import c_2 from "../../../assets/images/blog/c-2.png"
import c_3 from "../../../assets/images/blog/c-3.png"

import b_sm_1 from "../../../assets/images/blog/b-sm1.png";
import b_sm_2 from "../../../assets/images/blog/b-sm2.png";
import b_sm_3 from "../../../assets/images/blog/b-sm3.png";
import b_sm_4 from "../../../assets/images/blog/b-sm4.png";


import sidebarBanner from "../../../assets/images/sidebar-banner.png"

import { Link } from "react-router-dom";
class BlogDetails extends Component {

    componentDidMount() {
        this.scrollTop();
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <>
                {/* ===============  breadcrumb area start =============== */}
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">

                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                {/* ===============  Blog wrapper area start =============== */}
                <div className="blog-details-wrapper pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="blog-details">
                                    <div className="blog-title-xl">
                                        <h3>1. CHANGES AND CANCELLATIONS</h3>

                                    </div>

                                    <div className="blog-texts mt-30">
                                        <h4>a) Changes And Cancellations — By You</h4>
                                        <p>You must contact us to change or cancel your trip. All changes are subject to availability, limitations and restrictions of the relevant airline, hotel or car provider (the Supplier). The refundable portion of your purchase price (if any) will be refunded to you and to the extent we are refunded by the Supplier; we shall pass this refund onto you. If you want to cancel or change your booking the payment card fee charged at the time of booking will not be refundable. If the cancellation means that the Supplier charges a cancellation charge (which in some cases can be 100% of the booking value) or if the change means that the cost of your booking has increased (if, for example, you wish to upgrade to a more expensive hotel), you will need to pay such extra charges or costs in addition which your consultant will advise you. Deposits are always non refundable, and if we have paid the supplier more than deposit taken from you, then you are obliged to pay the remaining to us.
                                        </p>
                                        <h4>i) Cancellations on hotel bookings</h4>
                                        <p>Your chosen hotel will typically have its own cancellation policy which we will display to you on the trip details page before you book. If there is a cancellation fee payable, it will apply a ‘per room’ and not ‘per booking’ cancellation fee. Times Travel LTD will pass on to you any such policies or charges that the hotel has imposed in relation to cancellation.</p>

                                        <h4>ii) Cancellations and amendments on low cost flights</h4>
                                        <p>The cancellation and amendment terms of low cost flights are the applicable terms of the airline. You should contact the airline direct to cancel or make amendments to low cost flights. Usually fares for low cost flights are non-refundable. In the event that you decide to cancel your low cost flight, our booking fee and any amendment charges are non-refundable. If the reason for your cancellation is covered by the terms of any insurance policy you have purchased, you may be able to reclaim any applicable non-refunded fares or cancellation charges from the insurers.</p>
                                        <h4>iii) Cancellation and amendments on car rental</h4>
                                        <p>Please refer to the applicable Supplier’s terms and conditions for cancellation charges and other important terms and conditions relevant to your booking.</p>

                                        <h4>iv) Cancelling your insurance policy</h4>
                                        <p>All insurance premiums are payable in full at the point of sale and are sold incorporating a 14 day cooling off period after which time some policies may be non-refundable. The 14 day cooling off period only applies if you have not travelled or made any claim under the insurance policy. It is your responsibility to check the specific terms of the insurance policy at the time of purchase.</p>
                                        <h4>v) No show</h4>
                                        <p>If you have a booking for any of our products or services, including flights, car hire, accommodation and packages, but you do not show up to check-in, collect the car or otherwise do not avail yourself of such product or service, you will not be entitled to any refund from us. You will, however, be entitled to a refund of any departure tax you may have paid for your flight (excluding low cost flights).</p>
                                        <h4>vi) Carrying proof of booking</h4>
                                        <p>You should ensure that you travel with your booking confirmations, e-tickets and any other travel documentation (including your passport and relevant visa) at all times. We will not be liable should any Supplier not provide you with the booked product or service if you do not produce such documentation.</p>
                                        <h4>b) Changes and cancellations – by us</h4>
                                        <p>Occasionally we may have to make changes to your booking. Most of these changes will be minor and we will advise you of the change as soon as we are able to before your journey commences. If there is a significant change, which is not due to an event beyond our control, you will be offered a choice of an alternative comparable trip (if available) or a refund. If the reason for the significant change to the booking is due to an event beyond our control (as described below) we will not be liable to offer you any compensation.</p>


                                        <h3 className="sub-title">Flight only bookings</h3>
                                        <p className="mt-20">If the flights you have booked are cancelled, and you have fully paid for them, we will take all measures with the airline to ensure you get 100% full refund.
                                            Flight plus hotel bookings
                                            If you have bought a flight plus hotel booking through us, please note that each component of the trip has their own rules and conditions, and their own terms and conditions. When booking a flight plus hotel booking through us, you have the option to pay in full or with a deposit. If you pay in full, the suppliers will issue your confirmations within 24hours.If paying by deposit, then this will only cover your flight part of the journey, and your rooms will be reserved for you at the hotels you have chosen, until we receive the final payment.

                                            In very rare cases, airlines sometimes get overbooked, or hotels become overbooked. If we have booked with deposit, we are obliged to let you know as soon as we get notified by supplier, with reasonable time to offer you alternative or full refund of deposit.  </p>
                                            <h4>Relocation of our clients</h4>

                                      
                                        <p className="mt-20">If the original hotel booked is closed, over booked, or cancelled for any other reason or has maintenance problems and /or cannot provide the room(s) booked. You accept that the hotelier or supplier is responsible for finding you alternate accommodation. If you deny the alternative, and arrange your own accommodation Times Travel will not be liable to pay any costs incurred because of this. Where we have prior notice Times Travel will contact you by email. If you reject the alternative accommodation offered, Times Travel accepts no liability for any losses or costs that might occur as a result of re-location as this is completely beyond our control. If the same hotel is available through another Agent / Company / Website, Times Travel LTD will not be liable for any difference in cost, due to us having our own rates and allocation with suppliers, but we will refund you any payment you have done towards the hotel less any cancellation charges if any.
                                        </p>
                                        <h4>c) Significant changes are normally regarded as</h4>
                                        <p>i)A change in your UK departure airport (excluding a change between Heathrow, Gatwick, Luton, Stansted and London City Airports);</p>
                                        <p>ii) A change of more than 12 hours in your departure time from the UK;</p>
                                        <p>iii) A change in your resort area overseas; or</p>
                                        <h4>d) Events beyond our control</h4>
                                       <p> These include: unusual, unforeseeable or unavoidable events beyond our control, the consequences of which could not be avoided even if all due care has been exercised including but not limited to war, threat of war, riot, civil disobedience or strife, government action, terrorist activity, natural or industrial disaster, fire, adverse weather conditions, level of water in rivers or floods, closure of airports and may also include industrial dispute involving third parties, technical or maintenance problems or unforeseen operational decisions of air carriers such as changes of schedule or any failure in the information technology infrastructure (including but not limited to our website) or failure in internet connections. Except where otherwise expressly stated in these booking conditions we regret that we cannot accept liability or pay any compensation where the performance of our contractual obligations is prevented or affected by reason of such events beyond our control.</p>
                                       <h4>e) March 2020 response to Covid – 19 update for travel restrictions period:</h4>
                                       <p>Please note the following advice does not override the terms and conditions set at the time of confirming your booking. It is to provide information and updates as per airline, hotel and ancillary providers terms and conditions.
In response to the Covid -19 global pandemic please note the following update to our terms and conditions:
i) Cancellations by the airline, hotels or service provider. In the event of airline carriers, hotels or service providers not providing a full, partial or any service as per the original contract please note you will be given a refund as per the service providers refund policy.
Please note these are changing regularly as they are subject to different travel and lockdown flight policies.
ii) You will be informed in writing if a refund has been approved, and the approximate time to expect your refund in. Our usual refund times can be between 14 days and 6 weeks, depending on what has been booked, and what part of the booking journey you are in. Due to Covid 19, refund processing times are totally dependant on suppliers, and your consultant will be able to give you an approximate time when this refund can be received. This can be anything from 4 weeks, to 1 year, depending on supplier policy.
Please kindly note above update is only during the Covid – 19 response phase. At other times the our usual booking terms and conditions apply
 </p>
 <h3 className="sub-title">2. AIR/FLIGHT BOOKINGS</h3>
 <h4>a) e-tickets</h4>
 <p>Some airlines offer only electronic confirmation of your reservation, or ‘e-ticketing’, on certain routes. We cannot be held responsible if your e-ticket does not arrive due to an incorrect email address or your junk email settings. You can ensure your e-tickets get to you by adding timestravel.com to your ‘safe list’. You must notify us immediately if you change your email address or contact telephone number after making a booking with Times Travel LTD. In addition, please check that the name on your passport matches the name on your ticket and/or booking confirmation. It is your responsibility to advise us if you have not received your eticket confirmation.</p>
 <h4>b) Low cost flights</h4>
 <p>To book a flight from a low cost airline you can select on the web page of Times Travel LTD a flight shown by the logo or the words “Low Cost”. After you enter the relevant personal information on our website, we will pass these to the low cost airline. The booking will be made directly between you and the low cost airline. After completing the booking you will receive two booking confirmations by email, one from the airline and one from Times Travel LTD. The reference received from the airline is required for check in. It is your responsibility to ensure that all details of the booking are correct before proceeding. For any changes or cancellations, please contact the airline directly, quoting your reference. Our booking fee for low cost flights will be debited from you at the time of booking. We shall dispatch a confirmation invoice to you which shall confirm your booking with the airline and the airline will debit payment from you for the fare and taxes. Additionally we must inform you that most low cost airlines charge a payment card fee, which will be notified to you immediately prior to purchase. All charges, including the payment card fees, may be in another currency (e.g. EUR). Low cost airlines may also charge additional fees for checked baggage and for in-flight food and drink.</p>
 <h4>c) Flying times</h4>
 <p>In your itinerary from Times Travel LTD, flight times are given for guidance only. All departure/arrival times on your flight ticket are provided by the airlines concerned and are estimates only. They may change due to air traffic control restrictions, weather conditions, operational/maintenance requirements and the requirement for passengers to check in on time. Unless your flight is purchased as part of a package, we are not liable if there is any change to a departure/arrival time previously given to you or shown on your ticket or for any other alteration to your flight by the relevant airline. Also, please note that where a sector of a flight itinerary is not utilised without contacting the carrier directly any remaining sectors may be subject to cancellation without further notification. Where this situation arises we are unable to accept responsibility for any costs incurred. It is for this reason that you are required to reconfirm your flights with the airline in accordance with the airline’s applicable reconfirmation deadline. For all air travel it is your responsibility to check the departure and arrival times of your flights at the time of travel. We are unable to make any special arrangements for you if you are delayed as these matters are at the sole discretion of the airline concerned. Please note that the times shown on your ticket or itinerary are the departure times of the flight. Check-in times, as advised by the carrier or in the airlines’ timetable are the latest times at which passengers can be accepted for travel, allowing the necessary time to complete all formalities. Flights cannot be held up for passengers arriving late and no responsibility can be accepted by us or the airline in such cases. If the airline has a schedule change where the stopover is longer than originally stated, we will notify by email. Times Travel is not responsible for providing any accommodation if the stopover becomes longer, and is accepted by the client.
 </p>
 <h4>d) Seat requests</h4>
 <p>We have no control over the airlines’ allocation of seats and so, if you have particular seat requests, you should check-in at the airport as early as possible. We cannot guarantee that these requests will be met.</p>
 <h4>e) Direct flights</h4>
 <p>Please note that a flight described on your flight ticket as “direct” will not necessarily be non-stop. A flight that is described as direct is one where there is no need to change aircraft during the journey.</p>
 <h4>f) Pregnancy and children</h4>
 <p> Some airlines refuse to carry women who will be 28 weeks or more pregnant on the date of return travel. Please check with the airline concerned as their rules may vary and also consult your doctor. Infants must be 6 weeks old or more to travel by air and must either sit on an adult’s lap or occupy an infant seat. Please contact the airline you are travelling with for details of appropriate seats. Generally children aged 2 years or more must occupy a seat. A child must be under 2 years of age on the date of their return flight to be entitled to the infant fare level which is usually 10% of the International Air Transport Association’s (or IATA’s) published fare.
 </p>
 <h4>g) Government imposed taxes, fees and charges</h4>
 <p>The price of your flight may include taxes, fees and charges which are imposed on air transportation by government authorities. They may represent a significant portion of the cost of air travel and are either included in the fare or shown separately on your ticket. You may also be required to pay taxes or fees or other charges not already collected, for example, it is not always possible to include all departure taxes on your ticket(s). In some cases departure taxes must be paid by you locally to the Government of the country you are departing from and are therefore non-refundable by us.</p>
 <h4>h) Air Travel Organizer’s License (ATOL) protection</h4>
 <p>Please note that this section does not apply to low cost flights. We provide you with security for the monies that you pay for your package and for your repatriation in the event of our insolvency. Holiday packages which include flights are ATOL protected by the CAA. ATOL number ATOL 74904. In the unlikely event of our insolvency, the CAA will ensure that you are not stranded abroad and will arrange to refund any money you have paid to us for an advance booking. For further information, visit the ATOL website at www.atol.org.uk. Trade Association membership We are accredited by IATA.</p>
 <h4>h) Air Travel Organizer’s License (ATOL) protection</h4>
 <p>In accordance with European regulations we are required to bring to your attention the existence of a ‘Community list’, which contains details of air carriers that are subject to an operating ban within the European Community. The Community list is available for inspection at https://ec.europa.eu/transport/air/safety/flywell_en.htm We reserve the right to change your airline in the event that the airline is blacklisted under the EU regulations. Any changes to the actual airline after you have received your tickets will be notified to you as soon as possible and in all cases at check-in or at the boarding gate.</p>
 <h4>aj) Baggage</h4>
 <p>You will usually be permitted a free checked baggage allowance and a free cabin baggage allowance, the limits of which may differ by airline, class and/or route. The amount of checked baggage you are allowed depends on your class of travel/destination. Several leading carriers have now introduced additional charges for checked baggage on either a piece or weight basis. Full details of each carrier’s baggage policy and any applicable fees can be found by following the links below What should I know about check in baggage?. It is recommended that cabin baggage is kept to a minimum. Extra charges may apply for checked baggage in excess of the permitted allowance. Please ask the airline for more specific information as these rules vary from time to time. You can refer to www.iata.org/bags for information and links. For safety reasons dangerous articles must not be packed in checked or cabin baggage. Restricted articles include, but are not limited to, compressed gases, corrosives, explosives, flammable liquids and solids, radioactive materials, oxidizing materials, poisons, infectious substances and briefcases with installed alarm devices.</p>
 <h4>l) Denied boarding, cancellation or flight delays</h4>
 <p> Under European law you have rights in some circumstances to refunds and/or compensation from your airline in cases of denied boarding, cancellation or delay to flights. Full details of these rights will be publicized at European airports and will also be available from airlines. However reimbursement in such cases is the responsibility of the airline. If your airline does not comply with these rules you should complain to the Air Transport Users’ Council on 020 7240 6061 or at the website www.auc.org.uk
 </p>
 <h4>m) Best Price Guarantee — Flights</h4>
 <p>If you believe you have found a lower rate than the rate you have paid, send in your claim to us in accordance with the below and we will investigate and, if applicable, issue you with a refund for the difference. The following requirements must be met:-</p>
<p>i) The refund must be claimed within 48 hours of the time of booking and at least 72 hours prior to the date of the departure; and</p>
<p>ii) Only prices from online travel retailers will be matched and the flight at the lower price must be offered by a bonded travel agent (IATA membership or equivalent); and</p>
<p>iii) The claim must be based on a like for like comparison of the same airline, flight timings, same class as those services as those offered by Times Travel LTD (e.g. inclusive of service charges and taxes) and be for the same dates as actually booked; and</p>
<p>iv) The flight at the lower price must be available immediately by an online booking to the customer; and</p>
<p>v) A screen shot proof (or similar) of the lower price offer needs to be done the same day, latest 2 hours after having made your booking on Times Travel LTD. The screen shot must show the following elements: detailed price, airline, travel dates, destination, flight timings, flight class, type of passenger, number of passengers, date and hour of comparison. To submit a price match claim please follow the instructions below at paragraph 7u)</p>

<h4>n)IATA</h4>
<p>We are also members of IATA and all flights booking on the website are subject to IATA terms and condition which are incorporated by reference.</p>
<h4>o) Additional Charges</h4>
<p>Airlines may also charge additional fees for in-flight food and drink. The amount of checked baggage you are allowed depends on your class of travel/destination. Several leading carriers have now introduced additional charges for checked baggage on either a piece or weight basis. Full details of each carrier’s baggage policy and any applicable fees can be found by following the links below.
 </p>
 

 <h3 className="sub-title">3. HOTEL/ACCOMMODATION ONLY BOOKINGS</h3>
 <h4>Rate Availability</h4>
 <p>All hotel rates are valid for UK residents only. If you are not a UK resident please call us for further information on 0207 447 5000.</p>
 <h4>a) Additional local charges</h4>
 <p>Certain of our hotels will require an additional charge to be paid locally (e.g. a resort fee) at the time of check in or check out. Please note this amount is in addition to the amount shown during the booking process under the ‘total booking cost’ amount. If applicable, such amount will be displayed on the trip details page in the ‘pricing summary section.</p>
 <h4>b)Map/Distance disclaimer</h4>
 <p>Please note that the information as to the distance from the city centre and the location of the hotel on the maps provided are for indicative purposes only. If a customer requires the hotel to be within a certain distance from the city centre or near a particular location, the customer should contact the hotel in question prior to booking.
 </p>
 <h4>c) Unavailability</h4>
 <p>Where we are unable to confirm the initial requested accommodation, we will call you to inform you of the details of alternative accommodation or lack of availability. At that time you will have the option to accept the alternative accommodation or get a refund of the total monies paid to us by you for your original booking.
 </p>
 <h4>d) Merchant/Retail hotels</h4>
 <p>We sell hotel reservations in two different ways:-</p>

 <p>i) as merchant hotels which we sell to you as principal; and</p>
 <p>ii) as retail hotels which we sell to you as agent these can be recognised on the website as hotels where your hotel bill will be payable upon checkin/checkout directly to the hotel. For all retail hotels, we act as an agent on your behalf and Times Travel LTD will dispatch a confirmation invoice to you which shall confirm your booking with the hotel. The hotel will debit payment from you for the accommodation at the time of checkout. You will be advised of all such amounts during the booking process.</p>

 <h4>e) Star ratings</h4>
 <p>Star ratings are used to symbolise the overall quality, level of service, food standard and range of facilities available in any given hotel property. The criteria applied within each country will vary depending on the specific requirements established by the relevant issuing body and are provided to you for information purposes only. They are not a guarantee or warranty of any kind by Times Travel LTD.
 </p>
 <h4>f) Hotel facilities</h4>
 <p>Please read the detailed description of the hotel for other hotel policies applicable to your stay. You must be at least 21 years of age to check into Las Vegas hotels. Please note that the hotels booked by us for you are not exclusive to Times Travel LTD. We are not responsible for any limitation in facilities because of other hotel guests or their activities. Times Travel LTD does not take responsibility for hotel content (including images, facility listings, etc.) displayed on our website. Hotels may change facilities and property features without prior notice to Times Travel LTD and it is the customers’ responsibility to confirm facilities directly with the hotel at the time of travel.</p>
 <h4>g) Local Taxes Not Included in Hotel Cost</h4>
 <p>Please note that there may be taxes levied abroad but not paid at the point of purchase that are payable in relation to your hotel booking e.g. local taxes, sales tax etc. Any local taxes will be payable by you directly to the hotel at the time of checkin/checkout.</p>
 <h4>h) Our right to cancel</h4>
 <p>We reserve the right to cancel your hotel booking if we have made a mistake in relation to the price of your stay. We will ensure that we notify you of such mistakes within a week of your booking, provided your stay has not started yet.</p>

<p>i) The refund must be claimed within 48 hours of the time of booking and at least 72 hours prior to the date of the first night’s stay; and</p>
<p>ii) Only prices from online travel retailers will be matched</p>
<p>iii) The claim must be based on a like for like comparison of the same type of room and occupancy in the same hotel, the same services as those offered by Times Travel LTD (e.g. inclusive of service charges, taxes and breakfast) and be for the same dates as actually booked; and</p>
<p>iv) The accommodation at the lower price must be available immediately by an online booking to the customer. “On Request” rooms are excluded; and</p>
<p>v) The accommodation at the lower price must not be a special offer price, discounted due to frequent flyer mileage credits, a promotional price or part of a package. To submit a price match claim please follow the instructions set out below in paragraph 7(u).</p>

<h3 className="sub-title">4. CAR HIRE BOOKINGS</h3>
<h4>a) Rate Availability</h4>
<p>All rental car rates are valid for UK residents only. If you are not a UK resident please call us for further information on 0207 447 5000.</p>
<h4>b) Minimum Age</h4>
<p>All Suppliers have a minimum age to be able to rent without incurring any extra charges, this is normally 25 years and above. Drivers between the ages of 21-24 years where it is permitted by a Supplier to rent a vehicle, will always incur an extra surcharge which is payable locally, is subject to tax and is non refundable. These fees can range from 10.00 Euros a day in Europe and from US$25.00 to US$50.00 US in the United States. Once you have selected your car please read the car rental rules where you will be able to find the amount payable.</p>
<h4>c) Maximum Age</h4>
<p>There are very few locations, which have an upper age limit. These can vary from the age of 60 years upwards. If you are over the age of 60 years it is your responsibility to check with the Supplier for eligibility. If you fail to check and you are over the age limit you may not be given the car.</p>
<h4>d) Rental Deposit</h4>
<p>Rental agencies only accept credit cards for securing your deposit at the rental location. You must use a credit card and it must be the driver’s credit card. We will not be liable for any compensation or otherwise if you do not have a credit card at the time of collecting your car and are refused rental by the Supplier.
 </p>
<h4>e) Driving License</h4>
<p>A valid driving license is required for all drivers. The license must be valid at the time of rental and remain valid throughout the rental period. We will not be liable for any compensation or otherwise if you fail to show a valid driver’s license to the Supplier and are refused rental.
 </p>
<h4>f) British License Holders</h4>
<p>If you have the new photo id license you must take the paper counterpart as well. If you do not present both the card and the counterpart you will not get the vehicle. If your license is written in Chinese, Russian or any ‘picture’ script then you will need to obtain an international driver’s permit before you travel from your country of residence. This cannot be obtained in the United Kingdom.
 </p>
<h4>g) Excess Waiver</h4>
<p>Although our rates are fully inclusive there is always an excess to pay. This means in the event off accident/damage or theft, the driver will be expected to pay the first part of the claim. This can vary depending on the car you hire and the destination you are travelling to.
 </p>
<h4>h) Early Return of Your Vehicle</h4>
<p>The rental rate is calculated based on the return time agreed when picking up the vehicle. If the vehicle is returned earlier than originally planned, you will not receive any refund.
 </p>
<h4>i) Late Return of Your Vehicle</h4>
<p>The rental rate is calculated based on the return time agreed when picking up the vehicle. If the vehicle is kept longer than originally planned, you may be liable for an overcharge.
 </p>
<h4>j) Rental Agreement</h4>
<p>The rental agreement is given to you to sign when you pick up your vehicle. This has all the information about your rental. It is your responsibility to check this document carefully before you sign it and keep a copy. Times Travel LTD will not be liable in relation to any breach of this agreement.
 </p>
<h4>k) Child Safety Seats</h4>
<p>Children from the age of 3 years to their 12 years or up to 135cm in height (whichever is attained sooner) must be restrained in a suitable seat in the rear of the vehicle. The law states that it is the responsibility of the driver of the vehicle to comply.</p>
<h4>a) e-tickets</h4>
<p>If you believe you have found a lower rate than the rate you have paid, send in your claim to us in accordance with the below and we will investigate and, if applicable, issue you with a refund for the difference. The following requirements must be met:-
 </p>
<h4>I) Best Price Guarantee Terms and Conditions – Car Hire</h4>
<p>(i) The refund must be claimed within 48 hours of the time of booking and at least 72 hours prior to the date of your pick-up; and</p>
<p>(ii) Only prices from online travel retailers will be matched. The car rental at the lower price must be offered by a bonded travel agent or car hire company; and</p>
<p>(iii) The claim must be based on the following like for like comparison elements: same car hire company, same type of car, same dates, same pick-up and drop-off locations and same inclusions as those offered by Times Travel LTD; and</p>
<p>(iv) The car hire at the lower price must be available immediately by an online booking to the customer. “On Request” cars are excluded; and</p>
<p>(v) A screen shot proof (or similar) of the lower price offer needs to be done the same day, latest 2 hours after having made your booking on Times Travel LTD. The screen shot must show the following elements: detailed price, car hire company, type of car, dates, pick-up and drop-off locations, price inclusions, date and hour of comparison; and</p>
<p>(vi) The car hire at the lower price must not be a special offer price, discounted due to frequent flyer mileage credits and any membership card, or part of a package.</p>


<h3 className="sub-title">5.GENERAL BOOKING TERMS AND CONDITIONS</h3>
<h4>a) Your contract</h4>
<p>Your contract will either be with Times Travel LTD or another travel supplier depending on what travel product/s or service/s you book. When you book a package or a hotel only booking which we sell as principal (see explanation above at paragraph 3 (d) above) your contract will be with Times Travel LTD. A ‘package’ is a pre-arranged combination of at least two of the following:</p>
<p>(a) transport</p>
<p>(b) accommodation or</p>
<p>(c) another tourist service forming a significant part of your booking and those two or more components are sold to you as a whole at the same time by us at an inclusive price with full payment being made to us</p>
<p>Your credit card will be charged for the full amount of your Times Travel LTD package at the time of booking. You may have separate credit card charges for each product in the package, totaling the amount quoted for your package.

If you book a low cost flight with us, which are flights with a low cost airline which is shown by the logo on our website, we will make the booking as your agent and your contract for your low cost flight will be additionally subject to the airline’s terms and conditions which could limit or exclude liability to you (often in accordance with various applicable international conventions). If your booking is not a package or accommodation which we sell as principal, Times Travel LTD will make the booking on your behalf as a booking agent for the relevant Supplier’s concerned and your contract will be subject to the Supplier’s terms and conditions which could limit or exclude liability to you (often in accordance with various applicable international conventions). If you wish to review the relevant Supplier’s terms, we refer you to the links section of our website where the Supplier’s terms will be available through a link. In instances where it is not possible to access the Supplier’s terms by a link, we will provide the Supplier’s contact details so that you may contact them. Alternatively, you should visit the relevant Supplier’s official website. Please ensure you refer to the applicable Supplier’s terms and conditions for cancellation charges and other important terms and conditions relevant to your car rental.

Your holiday will not be a package if you, or our travel advisors on your behalf, put together two or more different and individually priced types of products or services and where you book these products at the same time for one total price. In these circumstances your contract will be with the relevant third party Supplier. Times Travel LTD will be acting as agent for the Supplier and is not a party to the contractual relationship. Again, you will be additionally subject to the Supplier’s terms and conditions which could limit or exclude liability to you (often in accordance with various applicable international conventions).

Your contract will come into existence once we have received your payment in cleared funds and a confirmation invoice has been issued. Prices are confirmed at the final step of the booking path at the point when you click ‘Agree and purchase’. Prices are shown with rates of exchange calculated on a daily basis. Prices, including sterling (GBP) price estimates, may therefore differ on a daily basis to reflect any movement in exchange rate levels. When a booking is made the exchange rate will be fixed at the time the item is created and will apply to any amendments or cancellations to that item within the booking. Exchange rates are determined by Times Travel LTD. These booking conditions apply to all bookings (including those where we act only as agent) except where otherwise specified. Please note that a Times Travel LTD booking fee may be applicable which is a maximum of £30 per person depending upon whether you book on our website or via our call centre and depending upon which product you book. You will be advised of any fee before you confirm your reservation. An additional charge of 1.5% of the total booking value may be charged for all products purchased from Times Travel LTD (excluding hotel bookings where payment is made at the hotel and excluding air fares where payment is taken by carrier) when you pay. This amount will always be shown prior to payment being taken and will be a maximum of £30 per booking.

We reserve the right to cancel your booking in the event we have reasonable grounds to believe it is fraudulent. In such circumstances we will attempt to contact you using the email address you provided at the time of booking or your bank. In the event we are not able to contact you or your bank, we may cancel your booking with no liability whatsoever. All Times Travel LTD fees can be changed at any time. This includes telesales, cancel, change, payment card or other fees. Such fees can be reduced, increased or removed at any time.

 </p>
<h4>b) Privacy policy</h4>
<p>For details of how we may use information which we obtain from you by your use of the site, please refer to our privacy policy on our website which forms part of the contract under which we provide you with travel services. If you do not accept all of these terms, then please do not use this website. You must keep secure any means of identification which we supply to you in order to use services on this site. You must supply accurate and complete information when using this site.
 </p>
<h4>c) Governing law</h4>
<p>These booking terms and conditions shall be governed and construed in accordance with the laws of England and Wales and the courts of England and Wales shall have non-exclusive jurisdiction to adjudicate any dispute which arises thereto. Additionally your accommodation booking may also be subject to local laws, customs and sensitivities, which may change from time to time. We are not liable for any bookings which do not comply with such local laws, customs and sensitivities.
 </p>

<h4>d) Insurance cover</h4>
<p>These booking terms and conditions shall be governed and construed in accordance with the laws of England and Wales and the courts of England and Wales shall have non-exclusive jurisdiction to adjudicate any dispute which arises thereto. Additionally your accommodation booking may also be subject to local laws, customs and sensitivities, which may change from time to time. We are not liable for any bookings which do not comply with such local laws, customs and sensitivities.
 </p>
<h4>e) Passport, visa and health information/requirements</h4>
<p>The information in this section is valid for British Citizens only. Non-British Citizens (including: citizens of British Dependent Territories; those who hold their citizenship by virtue of a connection with Gibraltar; British subjects who have a right of abode in the United Kingdom; and EC and other nationals) should consult the Embassy of their destination country and the Home Office Immigration Department regarding any special documentation for the countries they are visiting or for return to the UK. It is your responsibility to check with the applicable Embassy or Consulate to see whether the destination(s) that you are visiting requires a visa, especially if you do not hold a passport marked “British Citizen”. If you fail to do so, you will be solely responsible for any cost, loss or damage which you or we incur as a result of your failure. It is also important to remember to include all transit points of your journey, which may also require you to obtain a visa. Please note that many countries require that your passport is valid for six months beyond the period of your stay. Some countries apply different rules and you should contact the Embassy or Consulate of your destination for relevant current information.

It is vital that you ensure that your passport is legible and intact, any sign of damage could result in a refusal of carriage or entry into your country of destination. If you hold a UK passport and require information in respect of the validity of your passport, procedure and time required to apply for a passport or renew an existing passport, the regulations in respect of minors, or if your passport has been lost or stolen, you can contact the UK Passport Service help line on 0870 521 0410 or on the internet at www.ukpa.gov.uk

It is your responsibility to obtain the appropriate visa for your destination(s) and any applicable transit point. If you require information in respect of current visa requirements, procedure and time required to apply for the applicable visa, you should contact the Foreign and Commonwealth Office. Their telephone number is 020 7008 8438 and their website address is www.fco.gov.uk. Please note that specific requirements for specific countries can be complex and subject to change at short notice.

Children not already included on a valid British passport will need to hold their own passport if they are to travel abroad. Children who were included on a passport before 5 October 1998 may continue to travel with the passport holder until:
The name on the passport must match the name on the ticket, otherwise you may not be able to travel and insurance may be invalid. If, after booking a holiday but before travelling, any member of your party changes their name, e.g. as a result of getting married, we must be notified immediately so that we can endeavor to make the necessary changes to your holiday documentation.If you are travelling to or via the United States and if you come from a country that is part of the Visa Exemption Programme, from 12 January 2009 the Electronic System for Travel Authorization (ESTA) replaces the form that has until now been completed on the plane. If you travel to the USA from 12 January 2009, it is essential that you complete and print the ESTA form before you travel in order to receive travel authorization.

You must take this travel authorization with you when you travel. If you do not have this document or if it is invalid, the airline may refuse to allow you to board the aircraft.

The form must be filled out at the latest 72 hours prior to departure, but it is recommended that you complete it as soon as you plan your journey.

This procedure applies to adults and children (whatever their age). The information requested includes passport number and country of residence.

In most cases, electronic travel authorization is granted online almost immediately by specifying “authorization approved”. It is valid for a period of two years or until expiry of the passport.

You should seek advice on any vaccinations and precautions that may be compulsory or recommended from a health professional – a GP, practice nurse, pharmacist or travel health clinic – ideally at least 8 weeks before you travel. Further travel advice can be found on www.fitfortravel.scot.nhs.uk and www.nathnac.org. Information about how to get medical treatment abroad and how to get reduced cost, and sometimes free treatment in Europe can be found in the NHS leaflet “Health Advice for Travelers”.</p>
<h4>f) Pre-travel advice</h4>
<p>The Foreign and Commonwealth Travel Advice Unit may have issued information about your holiday destination. You are advised to check whether or not such information has been issued on BBC (Ceefax) page 470 or on the internet under the address www.fco.gov.uk/knowbeforeyougo prior to travelling.
 </p>
<h4>g) Booking your trip</h4>
<p>When you use our website to make a booking, you will need to provide us with credit or debit card details in order to cover the full cost of your trip. Your credit card will be charged for the full amount of your Times Travel LTD package at the time of booking. You may have separate credit card charges for each product in the package, totaling the amount quoted for your package. You authorize us or an authorized third party to take full payment for the total amount of your purchase. Please note that you may be required to present a credit card at the time of check-in. rental or pick-up to provide confirmation of authorized card use or to secure any additional charges.The price of each product or service is regularly reviewed and may go up or down. Promotional or discounted offers on this site are provided at our discretion. All offers are subject to availability and may be withdrawn at any time. We will charge you for any additional handling fees incurred by us in respect of payment through a debit or credit card and in addition to the price of your trip, there will be a booking fee payable per person. All such fees will be highlighted to you during the course of making your booking.

When you make a booking, you guarantee that you have the authority to accept, and do accept these conditions on your behalf and on behalf of all members of your party and, further, if you are making a booking for more than one person, that you are responsible for all payments due from each and every party member for whom you are making a booking. It is your responsibility to ensure that any information which is given to you by us or any of our employees or Suppliers is passed onto all members of your party. Any information which we give to you shall be deemed as given to each and every party member for whom you are making or have made a booking.

 </p>
<h4>h) If something goes wrong</h4>
<p>Please note that this section does not apply to low cost flights. If a problem occurs with a low cost flight you should inform the airline as your contract is with the airline (as explained in paragraph 7 a) above).If a problem occurs whilst you are abroad, you must inform the relevant Supplier. If the Supplier cannot resolve the problem to your satisfaction, you should contact us on 0207 447 5000 so that we are given the opportunity to help. If your complaint is not resolved at the time, you must notify us at the earliest opportunity and write within 28 days of your return to our Customer Services Manager at Times Travel LTD 13 Station Road, London, SE25 5AH quoting your original booking reference and giving all relevant information. Failure to notify us within this time period may hinder our ability to resolve your complaint and/or investigate it fully and, as a consequence, any right to compensation that you may have could be prejudiced.
 </p>
<h4>i) Our liability for your trip</h4>
<p>Subject to paragraphs 7j) and 7l) below, we accept responsibility for ensuring that your package, or accommodation only booking which we sell as principal, which you book with us, is supplied as described on our website. If any part of your package, or accommodation only booking which we sell as principal, is not as described and/or is not of a proper standard, due to the fault of our employees, agents or Suppliers we will pay you reasonable compensation if this has affected the enjoyment of your travel arrangements up to a limit of two times the value of your booking. Subject to paragraph 7l) below, we accept responsibility for death, injury or illness caused by the acts and/or negligence of our employees, agents or our Suppliers, whilst acting within the scope of, or in the course of, their employment in the provision of your package or accommodation only booking which we sell as principal.If you have not booked a package, or accommodation only booking which we sell as principal, in consideration of the fact that we act only as a booking agent for the Suppliers of your trip, we have no liability whatsoever if your trip is deficient and, in particular, we have no liability for any loss, personal injury or death however incurred unless such loss is caused by our negligence.
 </p>
<h4>k) Important notices on limits of liability</h4>
<p>In respect of international travel our liability to you will be limited or excluded in the same manner provided by the relevant international conventions mentioned below. This means that our liability to you shall be limited to the actual engaged liability (if any) of the operating carrier or transport company which undertakes the relevant travel services.Times Travel LTD is recognized as an organizer for travel and holidays only and, as such, does not control or operate any airline, shipping company or rail company. When you travel your journey may be subject to certain international conventions such as, but not limited to, the Warsaw convention and Montreal convention (in respect of international carriage by air), the Athens convention (in respect of international carriage by sea) or COTIF (The Convention Concerning International Carriage by Rail), as such conventions are amended or re-enacted from time to time (the “Conventions”). You agree that these Conventions will apply to you on that journey. Please click here to read these Conventions which are incorporated into these terms and conditions.

You agree that the operating carrier or transport company’s own “Conditions of Carriage” will apply to you on that journey. When arranging this transportation for you, we rely on the terms and conditions and limits of liability contained within these international conventions and those “Conditions of Carriage”. You acknowledge that all of the terms and conditions contained in those “Conditions of Carriage” form part of your contract with us as well as the transport company and that those “Conditions of Carriage” shall be deemed to be included by reference into your contract. These Conditions of Carriage are available on our website within the booking path. In addition, you can ask for copies of these international conventions or the “Conditions of Carriage” of the applicable operating carrier from our offices at Times Travel LTD, 13 Station Road, London, SE25 5AH. Copies of the “Conditions of Carriage” of the applicable operating carrier are also available on the website of the relevant carrier.

Agents who do not hold either ATOL, IATA, ABTA membership or relevant travel certification, unless specified through separate contract, are considered direct customers purchasing services for their associates. We reserve the right to cancel tickets if payment for services has not been received by the payment due date, payment is bounced back by card issuer or bank, payment is cancelled, or payment is charged back

In the event of the payment due date being passed bookings held, issued or unissued, used or unused tickets, we reserve the right to cancel any used / unused tickets, should you withhold payment or payment is charged back. Customers will need to make their own arrangements to continue their journeys as a result of any cancelled services due to non payment.

Services purchased on credit where no credit no credit agreement is in place, have gone over your credit agreement, or even not paying within your timed credit amounts or payment due dates we reserve the right to cancel any half used, fully used tickets, to recover any monies towards what is outstanding. Times Travel cannot be held responsible for any inconvenience, disruptions, losses, delays, missed connections due to services being cancelled do to non payment of services.

 </p>
<h4>m) Events beyond our control</h4>
<p>Except where otherwise expressly stated in these booking conditions we regret that we cannot accept liability or pay any compensation where the performance of our contractual obligations is prevented or affected by circumstances beyond our control as described in paragraph 1 sub-paragraph 3 above.
 </p>
<h4>n) Your behavior</h4>
<p>It is your responsibility to ensure that you and the members of your group do not behave in a way which is inappropriate or causes danger, distress, offence or damage to others or which risks damage to property belonging to others (including but not limited to drunkenness and air rage) whilst on your trip.If, in our reasonable opinion or that of our Suppliers, your behavior is inappropriate and causes danger, distress, offence, or damage to others, or risks damage to property belonging to others, we and/or our Suppliers (e.g. hotel managers, airline pilots) may take appropriate action in order to ensure the safety and comfort of our customers and their property and that of our Suppliers, including terminating your trip, in which case our and our Supplier’s responsibility to you will cease immediately and you will not be eligible for any refunds, payments of compensation and/or any reimbursement of any cost or expenses you may incur as a result of such termination. Further, you will be liable to reimburse us for any expenses we incur necessarily as a result of such termination.
 </p>
<h4>o) Changes to terms and conditions</h4>
<p>We may amend these terms and conditions at any time without prior notice. If we do amend these terms and conditions, the amended terms will be effective when posted on this website and you are deemed to have accepted the relevant changes.
 </p>
<h4>p) Special assistance</h4>
<p>If you are disabled or incapacitated or of limited mobility or require special assistance for any reason, we require that you notify us at the time of making your booking. If these requirements change before your trip you must inform us. We will not subsequently be liable to you for any losses you may incur in the event that we or our Suppliers are unable to accommodate your requirements.
 </p>
<h4>q) Weather</h4>
<p>We cannot be held responsible for any disruption to your trip due to bad or unusual weather conditions.
 </p>
<h4>r) Special requests</h4>
<p>Please advise us of any special requests and we will pass these on to the relevant Supplier. However, we cannot guarantee your special request as we do not have any direct control over the manner in which the services are provided.
 </p>
<h4>s) Telephone calls</h4>
<p>We reserve the right to randomly record telephone calls to ensure that our customer service is constantly reviewed.
 </p>
<h4>at) Third party rights</h4>
<p>A person who is not a party to these terms and conditions shall have no rights under the Contracts (Rights of Third Parties) Act 1999 to enforce any term of these booking terms and conditions. This paragraph does not affect any right or remedy of any person which exists or is available otherwise than pursuant to that Act.
 </p>
<h4>u) Best Price Guarantees</h4>
<p>In respect of all Best Price Guarantees the following conditions apply:</p>
<p>i) Times Travel LTD fair and exhibition periods are excluded; and</p>
<p>ii) Times Travel LTD must verify the claim to their reasonable satisfaction; and</p>
<p>iii) the lower price must be offered in the same currency as that of the booking with Times Travel LTD; and</p>
<p>iv) in order for a refund to be considered a booking has to have already been placed on the Times Travel LTD site; and</p>
<p>v) this Best Price Guarantee does not apply to bookings for groups of more than nine (9) people.</p>
<p>Times Travel LTD will not be liable for the payment of any refunds under the Best Price Guarantee with respect to rates loaded in error by Times Travel LTD or its Suppliers or any printing, typographical, administrative or technological errors in any materials relating to in any materials relating to rates backed by the Best Price Guarantee. To make a Best Price Guarantee claim, send an e-mail to priceguarantee@timestravel.com with the following information:</p>
<p>i) Your Times Travel LTD booking reference number; and</p>
<p>ii) Company name and web address of other online retailer; and</p>

<p>iii) Details with screen shot proof of price offered by other online retailer.</p>

<p>We will review your request and contact you via e-mail within two business days. If you are eligible for a price refund we will credit the card used to make the booking. Times Travel LTD reserves the right to modify or cancel any or all of its Best Price Guarantees at any time . Any cancellation will be effective upon removal of references to the Best Price Guarantee and these terms and conditions from the web site.
</p>

 




                                    </div>
                                   
                                   
                                
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </div>
                {/* ===============  Blog wrapper area end =============== */}
            </>
        );
    }
}

export default BlogDetails;
