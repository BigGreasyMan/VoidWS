using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TheVoidOfficial2.Logic.Commuication;

namespace TheVoidOfficial2.Data
{
    
    public class GlobalChatHub : Hub
    {
        private static ConnectionMapper _connections = new ConnectionMapper();

        public const string HubUrl = "/chatHandler";
        //What does the client need to call
        public async Task JoinRoom(string roomName,string userName)
        {
            //TODO Optimise i.e send phrase join. (name), client should parse the pharse and out name has joined

            _connections.AddConnection(userName,Context.ConnectionId);
            await Groups.AddToGroupAsync(Context.ConnectionId, roomName);
            await Broadcast(roomName, $" Has Joined the Channel {roomName} ", userName);
        }

        public Task LeaveRoom(string roomName, string userName)
        {
            _connections.RemoveConnection(userName,Context.ConnectionId);
            return Groups.RemoveFromGroupAsync(Context.ConnectionId, roomName);
        }

        public async Task BroadcastAsync(string roomName ,string message, string name)
        {
           
            await  Clients.OthersInGroup(roomName).SendAsync("ClientRec", message , name); 
        }
        public Task Broadcast(string roomName,  string message, string name)
        {
            return Clients.OthersInGroup(roomName).SendAsync("ClientRec", message, name);
        }
    

        



        public override Task OnConnectedAsync()
        {
            Console.WriteLine($"{Context.ConnectionId} connected");
            return base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception e)
        {
            Console.WriteLine($"Disconnected {e?.Message} {Context.ConnectionId}");
            await base.OnDisconnectedAsync(e);
        }
    }
}
