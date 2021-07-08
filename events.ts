
export default () => {
    mp.events.add('playerEnterVehicle', (vehicle : VehicleMp, seat : Number) => {
        mp.gui.chat.push("Enter Vehicle");
          if (mp.players.local.getSeatIsTryingToEnter() !== -1 || vehicle.getIsEngineRunning()) {
            return;
          }
          vehicle.setEngineOn(false, true, true);
    });
}