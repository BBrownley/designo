import React, { Component, createRef } from "react";

import locations from "./locationdata";

import { TileLayer, Marker, Popup } from "react-leaflet";

import { Container } from "../shared/Container.elements";

import {
  StyledMapContainer as MapContainer,
  LocationContainer,
  Info
} from "./LocationsPage.elements";

export default function LocationsPage() {
  const mapRef = createRef();
  return (
    <Container>
      {locations.map((location, index) => {
        return (
          <LocationContainer index={index}>
            <Info>
              <div className="wrapper">
                <h3>{location.country}</h3>

                <div>
                  <p>
                    <strong>{location.building}</strong>
                  </p>
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                </div>
                <div>
                  <p>
                    <strong>Contact</strong>
                  </p>
                  <p>P : {location.phone}</p>
                  <p>M : {location.email}</p>
                </div>
              </div>
            </Info>
            <MapContainer
              center={location.mapCoordinates}
              zoom={13}
              scrollWheelZoom={true}
              zoomControl={false}
              className="map-container"
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={location.mapCoordinates}>
                <Popup>{location.address}</Popup>
              </Marker>
            </MapContainer>
          </LocationContainer>
        );
      })}
    </Container>
  );
}
