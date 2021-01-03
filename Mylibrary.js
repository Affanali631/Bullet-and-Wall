function collisionDetect(moving,fix)
{
  if(fix.x-moving.x < fix.width/2+moving.width/2 && moving.x - fix.x < fix.width/2+moving.width/2 && 
    fix.y-moving.y < fix.height/2+moving.height/2 && moving.y - fix.y < fix.height/2+moving.height/2)
  {
   return true;
  }
  else
  {
    return false;
  }
}