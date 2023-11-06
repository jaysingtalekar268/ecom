// import { kafkaProduceMessage } from "@/lib/kafkaProducer";
// pages/api/sendMessage.js

import { Kafka } from "kafkajs";
import { NextResponse } from "next/server";




const kafka = new Kafka({
    clientId: `${process.env.KAFKA_CLIENT_ID}`,
    brokers: [`${process.env.KAFKA_HOSTNAME}:${process.env.KAFKA_PORT}`], // Single broker endpoint with SSL
    ssl: true,
    sasl: {
        mechanism: "scram-sha-512",
        username: `${process.env.KAFKA_USER}`,
        password: `${process.env.KAFKA_PASSWORD}`,

    },
});

const producer = kafka.producer();



export async function POST(req,) {
    console.warn("api/sendkafka called")
    if (req.method === "POST") {
        req = await req.json(req)
        console.warn("message", req)

        const { message, topic } = req
        try {
            console.warn(`kafka user ${process.env.KAFKA_USER}`)
            await producer.connect();
            await producer.send({
                // topic: `${process.env.KAFKA_USER}-test`,

                topic: `${process.env.KAFKA_USER}-${topic}`,
                messages: [
                    {
                        value: JSON.stringify(message),
                    },
                ],
            });

            // await producer.disconnect();

            return NextResponse?.json({ success: true, message: "Message sent to Kafka!" });
        } catch (error) {
            console.error("Error sending message to Kafka:", error);
            return NextResponse?.json({ success: false, message: "Error sending message to Kafka." });
        }
    } else {

        return NextResponse?.json({ success: false, message: "Method Not Allowed" });
    }
}

