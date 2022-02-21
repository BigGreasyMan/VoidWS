using System.Collections.Generic;

namespace TheVoidOfficial2.Logic.Commuication
{
    public class ConnectionMapper
    {
        private Dictionary<string, HashSet<string>> _mappedConnections = new Dictionary<string, HashSet<string>>();

        public int ConnectionAmount
        {
            get { return _mappedConnections.Count; }
        }

        public void AddConnection(string name,string connectionID) 
        {
            lock (_mappedConnections) 
            {
                HashSet<string> connections;
                if (!_mappedConnections.TryGetValue(name,out connections))
                {
                    connections = new HashSet<string>() { connectionID };
                    _mappedConnections.Add(name, connections);
                    return;
                }
                lock (connections) 
                    connections.Add(connectionID);
            }

        }

        public void RemoveConnection(string name, string connectionID)
        {
            lock (_mappedConnections) 
            {
                HashSet<string> connections;
                if (!_mappedConnections.TryGetValue(name, out connections))
                    return;

                lock (connections) 
                {
                    connections.Remove(connectionID);
                    if (connections.Count == 0) { _mappedConnections.Remove(name); }
                }

            }
        }

    }
}
