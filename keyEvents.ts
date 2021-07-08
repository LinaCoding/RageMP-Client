
export default () => {
    let handy : BrowserMp | undefined;

    //Open Testbrowser with F2
    mp.keys.bind(0x71, true, () => {
        if(!handy) {
            mp.gui.chat.push("F2 pressed!");
            handy = mp.browsers.new("package://web/index.html");
            mp.gui.cursor.show(true, true);
        } else {
            handy.destroy();
            handy = undefined;
            mp.gui.cursor.show(false, false);
        }
    });

    //Unlock vehicle with E
    mp.keys.bind(0x45, true, () => {
        //Only enable unlock other vehicles if player is outside
        if(!mp.players.local.vehicle) {
            mp.vehicles.forEachInRange(mp.players.local.position, 5, (vehicle : VehicleMp) => {
                mp.events.callRemote("unlockVehicle", vehicle);
                mp.gui.chat.push(`Try to unlock ${vehicle.id}`);
            });
        }
    });

    mp.keys.bind(0x4B, true, () => {
        const vehicle = mp.players.local.vehicle;

        if(vehicle) {
            vehicle.setEngineOn(!vehicle.getIsEngineRunning(), true, true);
            mp.gui.chat.push(`Set engine status ${vehicle.getIsEngineRunning() ? "enabled" : "disabled"}`);
        }
    });
}

