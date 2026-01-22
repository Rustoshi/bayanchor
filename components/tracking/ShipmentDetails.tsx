"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, User, Package, Truck, Box } from "lucide-react";
import type { TrackingData } from "./types";

const DEFAULT_CARRIER_REF = "BAY-19CD81";

interface ShipmentDetailsProps {
  data: TrackingData;
}

export function ShipmentDetails({ data }: ShipmentDetailsProps) {
  const [isOpen, setIsOpen] = useState(true); // Open by default

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
    >
      {/* Header - Clickable */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 sm:px-6 sm:py-5 flex items-center gap-2 sm:gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
          <Package className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
        </div>
        <div className="text-left flex-1">
          <h3 className="text-base sm:text-lg font-bold text-gray-900">Shipment Details</h3>
          <p className="text-xs sm:text-sm text-gray-500">Sender, receiver & package info</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
        </motion.div>
      </button>

      {/* Content - Collapsible */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 pb-6 pt-4">
              {/* Sender & Receiver */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {/* Sender */}
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <User className="h-4 w-4" />
                    Sender
                  </div>
                  <p className="font-semibold text-gray-900 mb-1">
                    {data.sender.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {data.sender.address}
                  </p>
                  {data.sender.phone && (
                    <p className="text-sm text-gray-500 mt-1">{data.sender.phone}</p>
                  )}
                </div>

                {/* Receiver */}
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <User className="h-4 w-4" />
                    Receiver
                  </div>
                  <p className="font-semibold text-gray-900 mb-1">
                    {data.receiver.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {data.receiver.address}
                  </p>
                  {data.receiver.phone && (
                    <p className="text-sm text-gray-500 mt-1">{data.receiver.phone}</p>
                  )}
                </div>
              </div>

              {/* Package Details */}
              <div className="p-4 bg-blue-50 rounded-xl mb-6">
                <div className="flex items-center gap-2 text-blue-700 text-sm mb-3">
                  <Box className="h-4 w-4" />
                  Package Details
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Weight</p>
                    <p className="font-semibold text-gray-900">{data.package.weight} kg</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Length</p>
                    <p className="font-semibold text-gray-900">
                      {data.package.dimensions ? `${data.package.dimensions.length} ${data.package.dimensions.unit}` : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Width</p>
                    <p className="font-semibold text-gray-900">
                      {data.package.dimensions ? `${data.package.dimensions.width} ${data.package.dimensions.unit}` : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Height</p>
                    <p className="font-semibold text-gray-900">
                      {data.package.dimensions ? `${data.package.dimensions.height} ${data.package.dimensions.unit}` : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Quantity</p>
                    <p className="font-semibold text-gray-900">{data.package.quantity || 1}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Declared Value</p>
                    <p className="font-semibold text-gray-900">
                      {data.package.declaredValue
                        ? new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: data.package.declaredValue.currency,
                          }).format(data.package.declaredValue.amount)
                        : "—"}
                    </p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-blue-100">
                  <p className="text-xs text-gray-500 mb-1">Description</p>
                  <p className="text-sm text-gray-700">{data.package.description || "No description provided"}</p>
                </div>
              </div>

              {/* Carrier Info */}
              <div className="p-4 bg-purple-50 rounded-xl mb-6">
                <div className="flex items-center gap-2 text-purple-700 text-sm mb-3">
                  <Truck className="h-4 w-4" />
                  Carrier Information
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Carrier</p>
                    <p className="font-semibold text-gray-900">{data.carrier?.name || "Bayanchor Logistics"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Reference No.</p>
                    <p className="font-semibold text-gray-900 font-mono">{data.carrier?.trackingCode || DEFAULT_CARRIER_REF}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Mode</p>
                    <p className="font-semibold text-gray-900 capitalize">{(data.carrier?.mode || data.shipmentMode || "Road").toLowerCase()}</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="pt-4 border-t border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Created</p>
                    <p className="font-medium text-gray-900">
                      {new Date(data.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Last Updated</p>
                    <p className="font-medium text-gray-900">
                      {new Date(data.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Service Type</p>
                    <p className="font-medium text-gray-900 capitalize">
                      {data.serviceType.toLowerCase().replace("_", " ")}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Shipment Mode</p>
                    <p className="font-medium text-gray-900 capitalize">
                      {(data.shipmentMode || "Road").toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
